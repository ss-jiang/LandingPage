import React, { Component } from 'react';
import { getIcon } from './getIcon';
import Refresh from 'react-icons/lib/fa/refresh';
import Edit from 'react-icons/lib/md/edit-location';
import Cancel from 'react-icons/lib/md/cancel';
import '../../css/weather-icons.min.css';

class WeatherCondition extends Component {
    constructor(props) {
        super(props);

        this.state ={
            isEditingLocation: false
        };

        this.refresh = this.refresh.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
    }

    refresh() {
        this.props.update();
    }

    changeLocation() {
        if (this._inputElement.value !== "") {
            this.props.changeLocation(this._inputElement.value);
            this.setState({
                isEditingLocation: false
            });
        }
    }

    render() {
        let weather = this.props.weather,
            location = weather.location,
            temp = weather.condition.temp,
            text = weather.condition.text,
            code = ("w-yahoo-" + weather.condition.code),
            icon = getIcon(code);

        return(
            <div>
                <div className="topBar">
                    <div id="c1">
                        <button type="button" className="locationButton" onClick={() => { this.setState({ isEditingLocation: !this.state.isEditingLocation })}}>
                            {
                                this.state.isEditingLocation 
                                ? <Cancel/> 
                                : <Edit/>
                            }
                        </button>
                    </div>
                    <div id="c2">
                        <span className="weatherLocation">
                            {
                                this.state.isEditingLocation 
                                ? <form className="locationForm" onSubmit = {this.changeLocation}>
                                        <input ref = {(a) => this._inputElement = a} placeholder = "Location">
                                        </input>
                                    </form>
                                : <span>{location}</span>
                            }
                        </span>
                    </div>
                    <div id="c3">
                        <button type="button" className="refreshButton" onClick={() => this.refresh()}>
                            <Refresh/>
                        </button>
                    </div>
                </div>
                
                <div className="weatherDay">Today</div>
                <div className="weatherIconCurrent"><i className={icon}></i></div>
                <div className="weatherCurrent">{temp}</div>
                <div className="weatherText">{text}</div>
            </div>
        );
    }
};

export default WeatherCondition;