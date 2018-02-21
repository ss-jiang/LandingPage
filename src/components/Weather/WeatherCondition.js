import React, { Component } from 'react';
import { getIcon } from './getIcon';
import '../../css/weather-icons.min.css';

class WeatherCondition extends Component {

    render() {
        let weather = this.props.weather,
            temp = weather.condition.temp,
            text = weather.condition.text,
            code = ("w-yahoo-" + weather.condition.code),
            icon = getIcon(code);

        return(
            <div>
                <div className="weatherIconCurrent"><i className={icon}></i></div>
                <div className="weatherCurrent">{temp}</div>
                <div className="weatherText">{text}</div>
            </div>
        );
    }
};

export default WeatherCondition;