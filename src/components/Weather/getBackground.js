import nature from '../../img/nature.jpeg';
import bridge from '../../img/bridge.jpeg';
import thunder from '../../img/thunder.jpeg';
import cloudy from '../../img/cloudy.jpeg';
import sunny from '../../img/sunny.jpeg';
import windy from '../../img/windy.jpeg';
import rain from '../../img/rain.jpeg';
import snow from '../../img/snow.jpeg';
import night from '../../img/night.jpeg';
import fog from '../../img/fog.jpeg';

var backgrounds = [
    nature,
    bridge,
    thunder,
    cloudy,
    sunny,
    windy,
    rain,
    snow,
    night,
    fog
]

var thunderArr = ["3", "4"];
var cloudyArr = ["26", "28", "30", "44"];
var sunnyArr = ["32", "34", "36"];
var windyArr = ["21", "23", "24"];
var rainArr = ["1", "2", "5", "6", "7", "8", "9", "10", "11", "12", "17", "18", "35", "37", "38", "39", "40", "45", "47"];
var snowArr = ["13", "14", "15", "16", "25", "41", "42", "43", "46"];
var nightArr = ["27", "29", "31", "33"];
var fogArr = ["19", "20", "22"];

var getBackground = function(condition) {
    if (rainArr.includes(condition)) {
        return backgrounds[6];
    }
    else if (snowArr.includes(condition)) {
        return backgrounds[7];
    }
    else if (sunnyArr.includes(condition)) {
        return backgrounds[4];
    }
    else if (nightArr.includes(condition)) {
        return backgrounds[8];
    }
    else if (windyArr.includes(condition)) {
        return backgrounds[5];
    }
    else if (thunderArr.includes(condition)) {
        return backgrounds[2];
    }
    else if (cloudyArr.includes(condition)) {
        return backgrounds[3];
    }
    else if (fogArr.includes(condition)) {
        return backgrounds[9];
    }
    else {
        var ret;
        (Math.random() > 0) ? (ret = backgrounds[0]) : (ret = backgrounds[1]);
        return ret;
    }
}

export { getBackground };