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
var weatherDate = data.dt;
//console.log(weatherDate);
var convertDate = new Date(weatherDate * 1000);
var cleanDate = convertDate.toDateString();
//console.log(cleanDate);
cityHeader.textContent = data.name + ": " + cleanDate;
var tempKelvin = data.main.temp;
//console.log(tempKelvin);
var tempFarenheit = (tempKelvin - 273.15) * 9 / 5 + 32;
//console.log(tempFarenheit);
var cleanTempFarenheit = parseInt(tempFarenheit);
//console.log(cleanTempFarenheit);
cityTemperature.textContent = "Temperature: " + cleanTempFarenheit + "°F";
var windMS = data.wind.speed;
//console.log(windMS);
var windMPH = windMS * 2.237;
//console.log(windMPH);
var cleanWind = parseInt(windMPH);
cityWind.textContent = "Wind: " + cleanWind + "MPH";
cityHumidity.textContent = "Humidity: " + data.main.humidity + "%";

});
}

function getForecastAPI() {
    var addtlQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

    var card1Date = document.getElementById("day1Date");
    var card2Date = document.getElementById("day2Date");
    var card3Date = document.getElementById("day3Date");
    var card4Date = document.getElementById("day4Date");
    var card5Date = document.getElementById("day5Date");

    fetch(addtlQueryURL)
.then(function (response){
    return response.json();
})
.then(function (data){
    //console.log(data)

    //     ##################################
    //##### SETTING DATES in FORECAST CARDS ######
    //     ##################################

    console.log(data.list[7].main.temp_max)
    var day01Date = data.list[7].dt;
    var convertDay1Date = new Date(day01Date * 1000);
    var cleanDay1Date = convertDay1Date.toDateString();
    card1Date.textContent = cleanDay1Date;

});
}
