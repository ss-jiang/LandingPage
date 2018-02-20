import React, { Component } from 'react';
import { getIcon } from './getIcon';
import '../../css/weather-icons.min.css';

class WeatherItem extends Component {
    constructor(props) {
        super(props);

        this.parseDate = this.parseDate.bind(this);
    }

    parseDate(date) {
        var myDate = new Date(date);
        var date2 = (myDate.getDate() < 10) ? ('0' + myDate.getDate()) : (myDate.getDate());

        return ((myDate.getMonth()+1) + "/" + date2);
    }

    render() {
        let weather = this.props.weather,
            day = weather.day,
            date = this.parseDate(weather.date),
            high = weather.high,
            low = weather.low,
            text = weather.text,
            code = ("w-yahoo-" + weather.code),
            icon = getIcon(code);

        return(
            <div>
                <div className="weatherDay">{day}</div>
                <div className="weatherDate">{date}</div>
                <div className="weatherIcon"><i class={icon}></i></div>
                <div className="weatherTemp">
                    <div><span className="weatherHigh">{high}</span> | <span className="weatherLow">{low}</span></div>
                </div>
                <div className="weatherText">{text}</div>
            </div>
        );
    }
};

export default WeatherItem;