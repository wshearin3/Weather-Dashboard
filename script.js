var APIKey = "79c8885bec0fbdcd642a8ba60c566561";
var city;

function saveCity() {
    var userInput = document.getElementById("city").value;

    if (userInput !== "") {
        localStorage.setItem("userCity", userInput);
        city = localStorage.getItem("userCity");
        console.log(city);
    } else {
        alert("Please enter a valid city");
    }
};

//city = localStorage.getItem("userCity");
//console.log(city);

function getWeatherAPI(){

var queryURL ="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var cityHeader = document.getElementById("location");
var cityTemperature = document.getElementById("temperature");
var cityWind = document.getElementById("wind");
var cityHumidity = document.getElementById("humidity");

fetch(queryURL)
.then(function (response){
    return response.json();
})
.then(function (data){
console.log(data);
cityHeader.textContent = data.name;
var tempKelvin = data.main.temp;
console.log(tempKelvin);
var tempFarenheit = (tempKelvin - 273.15) * 9 / 5 + 32;
console.log(tempFarenheit);
var cleanTempFarenheit = parseInt(tempFarenheit);
console.log(cleanTempFarenheit);
cityTemperature.textContent = "Temperature: " + cleanTempFarenheit + "°F";
var windMS = data.wind.speed;
console.log(windMS);
var windMPH = windMS * 2.237;
console.log(windMPH);
var cleanWind = parseInt(windMPH);
cityWind.textContent = "Wind: " + cleanWind + "MPH";
cityHumidity.textContent = "Humidity: " + data.main.humidity + "%";
});
}