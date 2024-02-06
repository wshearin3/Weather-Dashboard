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

    var card1Icon = document.getElementById("day1Pic");
    var card2Icon = document.getElementById("day2Pic");
    var card3Icon = document.getElementById("day3Pic");
    var card4Icon = document.getElementById("day4Pic");
    var card5Icon = document.getElementById("day5Pic");

    var card1HiTemp = document.getElementById("day1TempHi");
    var card2HiTemp = document.getElementById("day2TempHi");
    var card3HiTemp = document.getElementById("day3TempHi");
    var card4HiTemp = document.getElementById("day4TempHi");
    var card5HiTemp = document.getElementById("day5TempHi");

    var card1LoTemp = document.getElementById("day1TempLo");
    var card2LoTemp = document.getElementById("day2TempLo");
    var card3LoTemp = document.getElementById("day3TempLo");
    var card4LoTemp = document.getElementById("day4TempLo");
    var card5LoTemp = document.getElementById("day5TempLo");

    var card1Humidity = document.getElementById("day1Humidity");
    var card2Humidity = document.getElementById("day2Humidity");
    var card3Humidity = document.getElementById("day3Humidity");
    var card4Humidity = document.getElementById("day4Humidity");
    var card5Humidity = document.getElementById("day5Humidity");

    var card1Wind = document.getElementById("day1Wind");
    var card2Wind = document.getElementById("day2Wind");
    var card3Wind = document.getElementById("day3Wind");
    var card4Wind = document.getElementById("day4Wind");
    var card5Wind = document.getElementById("day5Wind");

    fetch(addtlQueryURL)
.then(function (response){
    return response.json();
})
.then(function (data){
    //console.log(data)

    //     ##################################
    //##### SETTING DATES IN FORECAST CARDS ######
    //     ##################################

    console.log(data.list[7].main.temp_max)
    var day01Date = data.list[7].dt;
    var convertDay1Date = new Date(day01Date * 1000);
    var cleanDay1Date = convertDay1Date.toDateString();
    card1Date.textContent = cleanDay1Date;

    console.log(data.list[15].main.temp_max)
    var day02Date = data.list[15].dt;
    var convertDay2Date = new Date(day02Date * 1000);
    var cleanDay2Date = convertDay2Date.toDateString();
    card2Date.textContent = cleanDay2Date;

    var day03Date = data.list[23].dt;
    var convertDay3Date = new Date(day03Date * 1000);
    var cleanDay3Date = convertDay3Date.toDateString();
    card3Date.textContent = cleanDay3Date;

    var day04Date = data.list[31].dt;
    var convertDay4Date = new Date(day04Date * 1000);
    var cleanDay4Date = convertDay4Date.toDateString();
    card4Date.textContent = cleanDay4Date;

    var day05Date = data.list[39].dt;
    var convertDay5Date = new Date(day05Date * 1000);
    var cleanDay5Date = convertDay5Date.toDateString();
    card5Date.textContent = cleanDay5Date;

//     ##################################
//##### SETTING ICONS IN FORECAST CARDS ######
//     ##################################

//     #####################################
//##### SETTING HI TEMPS IN FORECAST CARDS ######
//     #####################################

    var day1TempKelvin = data.list[7].main.temp_max;
    var day1TempFarenheit = (day1TempKelvin - 273.15) * 9 / 5 + 32;
    var cleanDay1TempFarenheit = parseInt(day1TempFarenheit);
    card1HiTemp.textContent = "High: " + cleanDay1TempFarenheit + "°F";

    var day2TempKelvin = data.list[15].main.temp_max;
    var day2TempFarenheit = (day2TempKelvin - 273.15) * 9 / 5 + 32;
    var cleanDay2TempFarenheit = parseInt(day2TempFarenheit);
    card2HiTemp.textContent = "High: " + cleanDay2TempFarenheit + "°F";

    var day3TempKelvin = data.list[23].main.temp_max;
    var day3TempFarenheit = (day3TempKelvin - 273.15) * 9 / 5 + 32;
    var cleanDay3TempFarenheit = parseInt(day3TempFarenheit);
    card3HiTemp.textContent = "High: " + cleanDay3TempFarenheit + "°F";

    var day4TempKelvin = data.list[31].main.temp_max;
    var day4TempFarenheit = (day4TempKelvin - 273.15) * 9 / 5 + 32;
    var cleanDay4TempFarenheit = parseInt(day4TempFarenheit);
    card4HiTemp.textContent = "High: " + cleanDay4TempFarenheit + "°F";

    var day5TempKelvin = data.list[39].main.temp_max;
    var day5TempFarenheit = (day5TempKelvin - 273.15) * 9 / 5 + 32;
    var cleanDay5TempFarenheit = parseInt(day5TempFarenheit);
    card5HiTemp.textContent = "High: " + cleanDay5TempFarenheit + "°F";



//     #####################################
//##### SETTING LO TEMPS IN FORECAST CARDS ######
//     #####################################

//     #####################################
//##### SETTING HUMIDITY IN FORECAST CARDS ######
//     #####################################

//     ##################################
//##### SETTING WIND IN FORECAST CARDS ######
//     ##################################

});
}
