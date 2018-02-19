import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
    constructor(props, context) {
        super(props, context);

        var date = new Date();
        var hr = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        this.state = {
            hour: hr % 12 || 12,
            minute: (min < 10) ? ('0' + min) : (min),
            second: (sec < 10) ? ('0' + sec) : (sec),
            greeting: this.updateGreeting()
        };
     
        this.updateTime = this.updateTime.bind(this);
        this.updateGreeting = this.updateGreeting.bind(this);
    }

    componentDidMount(){
        setInterval(() => 
            this.updateTime(), 1000
        );
    }

    componentWillUnmount() {
        this.clearInterval();
    }

    updateTime(){
        var date = new Date();
        var hr = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        this.setState({
            hour: hr % 12 || 12,
            minute: (min < 10) ? ('0' + min) : (min),
            second: (sec < 10) ? ('0' + sec) : (sec),
            greeting: this.updateGreeting()
        });
    }

    updateGreeting() {
        var hr = (new Date()).getHours();

        if (hr >= 6 && hr < 12) {
            return "morning";
        }
        else if (hr >= 12 && hr < 17) {
            return "afternoon";
        }
        else if (hr >= 17 && hr < 24) {
            return "evening";
        }
        else if (hr >= 0 && hr < 6) {
            return "night";
        }
        else {
            return "";
        }
    }

    render() {
        return (
            <div className="clockMain">
                <div className="display">
                    <span>{this.state.hour}</span>
                    <span>:</span>
                    <span>{this.state.minute}</span>
                    <span>:</span>
                    <span>{this.state.second}</span>
                </div>
                <div className="greeting">
                    <span>Good </span>
                    <span>{this.state.greeting}</span>    
                </div>
            </div>
        );
    }
};

export default Clock;