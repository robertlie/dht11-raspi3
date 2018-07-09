var sensor = require('node-dht-sensor');

var sensorType = 11;
var gpioPin = 4;

function readSensor(){
	sensor.read(sensorType, gpioPin, function(err, temperature, humidity) {
		if (!err) {
			console.log('temp: ' + temperature.toFixed(1) + 'C, ' + 'humidity: ' + humidity.toFixed(1) + '%');
		} else {
			console.log(err);
		}
	});
}

// Automatically update sensor value every 2 seconds
setInterval(readSensor, 2000);
