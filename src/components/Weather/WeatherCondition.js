import React, { Component } from 'react';
import { getIcon } from './getIcon';
import '../../css/weather-icons.min.css';

class WeatherCondition extends Component {
    constructor(props) {
        super(props);

        this.parseDate = this.parseDate.bind(this);
    }

    parseDate(date) {
        var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        var myDate = new Date(date);
        var date2 = (myDate.getDate() < 10) ? ('0' + myDate.getDate()) : (myDate.getDate());

        return {
            day: dayNames[myDate.getDay()],
            date: ((myDate.getMonth()+1) + "/" + date2)
        };
    }

    render() {
        let weather = this.props.weather,
            location = weather.location,
            temp = weather.condition.temp,
            date = this.parseDate(weather.condition.date),
            text = weather.condition.text,
            code = ("w-yahoo-" + weather.condition.code),
            icon = getIcon(code);

        return(
            <div>
                <div className="weatherLocation">{location}</div>
                <div className="weatherIconCurrent"><i class={icon}></i></div>
                <div className="weatherCurrent">{temp}</div>
                <div className="weatherText">{text}</div>
            </div>
        );
    }
};

export default WeatherCondition;