/* Accessing the DOM Element **/
const windSpeed = document.getElementById('wind_speed');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const weatherCondition = document.getElementById('weather_con');
const cityInput = document.getElementById('cityInput');
const cityForm = document.getElementById('cityForm');
const converterForm = document.getElementById('form2');
const display = document.getElementById('speech');
const errorMsg = document.getElementById('text_value');




// Prepare openweathermap.org request
let apiRequest = new XMLHttpRequest();



cityForm.addEventListener('submit', ($event) => {
  $event.preventDefault();
  if (cityInput.value === ''){
  	cityInput.style.border = 'thick solid red';
		errorMsg.style.color = 'red';
		return errorMsg.style.display = 'inline';
  }
  	const chosenCity = cityInput.value;
  apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&APPID=3c4d8896ac0bb0e38caf8bfa148bd151' );
  apiRequest.send();
  
});

apiRequest.onreadystatechange = () => {
  if (apiRequest.readyState === 4) {
  	if(apiRequest.status === 404) {
  		windSpeed.textContent = 'City not Found';
  		
  		humidity.textContent = 'City not Found';
  		weatherCondition.textContent = 'City not Found';	
  	}
  const response = JSON.parse(apiRequest.response);
    windSpeed.textContent = 'The Wind Speed in ' + response.name + ' is ' + response.wind.speed + 'm/s.';
    temperature.textContent = 'The Temperature in ' + response.name + ' is ' + response.main.temp + ' K';
    humidity.textContent = 'The Humidity in ' + response.name + ' is '  + response.main.humidity + ' g/kg';
    weatherCondition.textContent = 'The weather in ' + response.name + ' is ' + response.weather[0].description + '.';

    var temp1 = response.main.temp;
    	

	converterForm.addEventListener('submit', ($event) => {
	$event.preventDefault();
	
	/** Celsius Converter Funtion **/
	function convertToCelcius(){
	var celcuis = temp1 - 273.15;
	 var celcuis2 = Math.round(celcuis)
	return celcuis2;
}
  /** Fararenheit Converter Function **/
	function convertToFarenheit(){
		var fah = (temp1 - 273.15)*(9/5)+(32);
		var fah2 = Math.round(fah)
		return fah2
	}

	display.textContent = 'The Temperature in ' + response.name + ' is ' +convertToCelcius() + '°C And ' +convertToFarenheit() + '°F';

});



}

};

