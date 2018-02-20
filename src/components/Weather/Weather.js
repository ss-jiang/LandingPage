import React, { Component } from 'react';
import _ from 'lodash';

class Weather extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            city: 'Los Angeles',
            current: {},
            forecast: []
        };

        this.updateWeather = this.updateWeather.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }

    componentWillMount() {
        this.getWeather(this.state.city);
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
                var result = JSON.parse(response);
                console.log(result);

                // result.query.results.channel.item.condition = current weather 
                // result.query.results.channel.item.forecast[1 - 9] = 9 day forecast
                //      forecast[0].[ day, date, high, low, text ]
                // result.query.results.channel.location[ city, country, region(state) ]


                this.setState({
                    city: result.query.results.channel.location.city,
                    current: result.query.results.channel.condition,
                    forecast: result.query.results.channel.forecast
                });
            });
    }

    // updateWeather() {
    //     getWeather(this.state.city, function(response) {
    //         console.log(response);
    //         var weather =  _.map(response.list, (today) => {
    //             return  {
    //                 today,
    //                 city: response.city.name,
    //                 country: response.city.country
    //             }
    //         });

    //         this.setState({
    //             city: this.state.city,
    //             forecast: weather
    //         });
    //     }.bind(this));
    // }

    render() {
        return(
            <div className="weatherDisplay">

            </div>
        );
    }
};

export default Weather;