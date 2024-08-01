const convertToCelsius = function(temperature) {
  // Fahrenheit to celcsius formula
  var newTemp = (temperature - 32) * (5/9);
  return Math.round(newTemp * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  // Celsius to fahrenheit formula
  var newTemp = (temperature * (9/5)) + 32;
  return Math.round(newTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
