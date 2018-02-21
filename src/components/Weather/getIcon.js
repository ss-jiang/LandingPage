var iconMap = [ 
    { id: 'w-yahoo-0', name: 'tornado' } ,
    { id: 'w-yahoo-1', name: 'day-storm-showers' } ,
    { id: 'w-yahoo-2', name: 'hurricane' } ,
    { id: 'w-yahoo-3', name: 'thunderstorm' } ,
    { id: 'w-yahoo-4', name: 'thunderstorm' } ,
    { id: 'w-yahoo-5', name: 'rain-mix' } ,
    { id: 'w-yahoo-6', name: 'rain-mix' } ,
    { id: 'w-yahoo-7', name: 'rain-mix' } ,
    { id: 'w-yahoo-8', name: 'hail' } ,
    { id: 'w-yahoo-9', name: 'showers' } ,
    { id: 'w-yahoo-10', name: 'hail' } ,
    { id: 'w-yahoo-11', name: 'showers' } ,
    { id: 'w-yahoo-12', name: 'showers' } ,
    { id: 'w-yahoo-13', name: 'snow' } ,
    { id: 'w-yahoo-14', name: 'day-snow' } ,
    { id: 'w-yahoo-15', name: 'snow-wind' } ,
    { id: 'w-yahoo-16', name: 'snow' } ,
    { id: 'w-yahoo-17', name: 'hail' } ,
    { id: 'w-yahoo-18', name: 'rain-mix' } ,
    { id: 'w-yahoo-19', name: 'dust' } ,
    { id: 'w-yahoo-20', name: 'fog' } ,
    { id: 'w-yahoo-21', name: 'windy' } ,
    { id: 'w-yahoo-22', name: 'smoke' } ,
    { id: 'w-yahoo-23', name: 'strong-wind' } ,
    { id: 'w-yahoo-24', name: 'strong-wind' } ,
    { id: 'w-yahoo-25', name: 'snowflake-cold' } ,
    { id: 'w-yahoo-26', name: 'cloudy' } ,
    { id: 'w-yahoo-27', name: 'night-cloudy' } ,
    { id: 'w-yahoo-28', name: 'day-cloudy' } ,
    { id: 'w-yahoo-29', name: 'night-cloudy' } ,
    { id: 'w-yahoo-30', name: 'day-cloudy' } ,
    { id: 'w-yahoo-31', name: 'night-clear' } ,
    { id: 'w-yahoo-32', name: 'day-sunny' } ,
    { id: 'w-yahoo-33', name: 'night-partly-cloudy' } ,
    { id: 'w-yahoo-34', name: 'day-sunny-overcast' } ,
    { id: 'w-yahoo-35', name: 'rain-mix' } ,
    { id: 'w-yahoo-36', name: 'hot' } ,
    { id: 'w-yahoo-37', name: 'day-storm-showers' } ,
    { id: 'w-yahoo-38', name: 'day-storm-showers' } ,
    { id: 'w-yahoo-39', name: 'day-storm-showers' } ,
    { id: 'w-yahoo-40', name: 'showers' } ,
    { id: 'w-yahoo-41', name: 'snow-wind' } ,
    { id: 'w-yahoo-42', name: 'snow' } ,
    { id: 'w-yahoo-43', name: 'snow-wind' } ,
    { id: 'w-yahoo-44', name: 'day-sunny-overcast' } ,
    { id: 'w-yahoo-45', name: 'day-storm-showers' } ,
    { id: 'w-yahoo-46', name: 'snow' } ,
    { id: 'w-yahoo-47', name: 'day-storm-showers' } ,
    { id: 'w-yahoo-3200', name: 'stars' } 
]

var icons = new Map(iconMap.map(icon => [icon.id, icon.name]));

var getIcon = function(key) {
    return ("wi wi-" + icons.get(key));
}

export { getIcon };