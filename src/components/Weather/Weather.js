import React, { Component } from 'react';
import _ from 'lodash';
import WeatherCondition from './WeatherCondition';
import WeatherItem from './WeatherItem';
import '../../css/Weather.css';

class Weather extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            location: 'Los Angeles',
            condition: {},
            forecast: []
        };

        this.getWeather = this.getWeather.bind(this);
    }

    componentWillMount() {
        this.getWeather(this.state.location);
    }

    getUrl(city) {
        var escCity = escape(city);
        var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D'" + escCity + "')";
        
        return url;
    }

    getWeather(city) {
        var url = this.getUrl(city);

        var request = new Request(url, {
            method: 'get',
            headers: {
                Accept: 'application/json'
            }
        });

        fetch(request)
            .then(response => {
                setTimeout(() => null, 0);
                return response.text();
            })
            .then(response => {
                var weather = this.parseWeather(JSON.parse(response));
                console.log(weather);

                // result.query.results.channel.item.condition = current weather 
                // result.query.results.channel.item.forecast[1 - 9] = 9 day forecast
                //      forecast[0].[ day, date, high, low, text ]
                // result.query.results.channel.location[ city, country, region(state) ]


                this.setState({
                    location: (weather.location.city + "," + weather.location.region),
                    condition: weather.condition,
                    forecast: weather.forecast
                });
            });
    }

    parseWeather(result) {
        var extracted = {
            location: result.query.results.channel.location,
            condition: result.query.results.channel.item.condition,
            forecast: result.query.results.channel.item.forecast.slice(1, 7)
        }

        return extracted;
    }

    render() {
        return(
            <div className="weatherDisplay">
                <div className="currentCondition">
                    <WeatherCondition weather={this.state}/>
                </div>
                <div className="weekForecast">
                    {
                        this.state.forecast.map(function(forecast) {
                            return <div className="forecastItem" key={forecast.date}><WeatherItem weather={forecast}/></div>;
                        })
                    }
                </div>
            </div>
        );
    }
};

export default Weather;