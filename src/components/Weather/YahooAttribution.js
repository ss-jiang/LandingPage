import React, { Component } from 'react';
import '../../css/YahooAttribution.css';

class YahooAttribution extends Component {

    render() {
        let link = this.props.link;

        console.log(link);

        return(
            <div className="attribution">
                <div className="weatherLink"><a href={link} target="_blank" id="wlink">Weather provided by Yahoo</a><a href="https://www.yahoo.com/?ilc=401" target="_blank"><img src="https://poweredby.yahoo.com/purple.png" width="134" height="29"/></a></div>
            </div>
        );
    }
};

export default YahooAttribution;