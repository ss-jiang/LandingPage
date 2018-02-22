import React, { Component } from 'react';
import WeatherCondition from './WeatherCondition';
import WeatherItem from './WeatherItem';
import Refresh from 'react-icons/lib/fa/refresh';
import Edit from 'react-icons/lib/md/edit-location';
import Cancel from 'react-icons/lib/md/cancel';
import { getBackground } from './getBackground';
import '../../css/Weather.css';

class Weather extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            location: 'Los Angeles',
            condition: {},
            forecast: [],
            isEditingLocation: false
        };

        this.getWeather = this.getWeather.bind(this);
        this.update = this.update.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
        this.openLocationInput = this.openLocationInput.bind(this);
        this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
    }

    componentDidMount() {
        var prevState = localStorage.getItem('weatherState');
        if (prevState) {
            var parsedState = JSON.parse(prevState);
            this.setState({
                location: parsedState.location,
                condition: parsedState.condition,
                forecast: parsedState.forecast,
                isEditingLocation: false
            });
            
            this.handleBackgroundChange();
            return;
        }
        else {
            this.getWeather(this.state.location);
        }
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
                var parsed = JSON.parse(response);

                if (parsed.query.results !== null) {
                    var weather = this.parseWeather(JSON.parse(response));

                    this.setState({
                        location: (weather.location.city + "," + weather.location.region),
                        condition: weather.condition,
                        forecast: weather.forecast
                    });

                    this.handleBackgroundChange();
                }
                else {
                    console.log("Weather at location not available");
                }
            }).then(result => {
                localStorage.setItem('weatherState', JSON.stringify(this.state));
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

    update() {
        this.getWeather(this.state.location);
    }

    changeLocation(location) {
        if (this._inputElement.value !== "") {
            this.setState({
                isEditingLocation: false
            });
            this.getWeather(this._inputElement.value);
        }

        location.preventDefault();
    }

    openLocationInput() {
        this.setState({ isEditingLocation: !this.state.isEditingLocation });
    }

    handleBackgroundChange() {
        var cond = getBackground(this.state.condition.code);
        this.props.image(cond);
    }

    render() {
        return(
            <div className="weatherDisplay">
                <div className="topBar">
                        <div id="c1">
                            <label htmlFor="editLocation" className="locationButton" onClick={() => this.openLocationInput()}>
                                {
                                    this.state.isEditingLocation 
                                    ? <Cancel/> 
                                    : <Edit/>
                                }
                            </label>
                        </div>
                        <div id="c2">
                            <span className="weatherLocation">
                                {
                                    this.state.isEditingLocation 
                                    ? <form className="locationForm" onSubmit = {this.changeLocation}>
                                            <input id="editLocation" ref = {(a) => this._inputElement = a} placeholder = "Location">
                                            </input>
                                        </form>
                                    : <span>{this.state.location}</span>
                                }
                            </span>
                        </div>
                        <div id="c3">
                            <button type="button" className="refreshButton" onClick={() => this.update()}>
                                <Refresh/>
                            </button>
                        </div>
                </div>
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