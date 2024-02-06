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

    var card1Temp = document.getElementById("day1Temp");
    var card2Temp = document.getElementById("day2Temp");
    var card3Temp = document.getElementById("day3Temp");
    var card4Temp = document.getElementById("day4Temp");
    var card5Temp = document.getElementById("day5Temp");

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

   
    day1IconId = data.list[7].weather[0].icon;
    console.log(day1IconId);
     if (day1IconId == "01d") {
        card1Icon.src = "./weather_icons/01d.png";
     } else if (day1IconId == "01n") {
        card1Icon.src = "./weather_icons/01n.png";
     } else if (day1IconId == "02d") {
        card1Icon.src = "./weather_icons/02d.png";
     } else if (day1IconId == "02n") {
        card1Icon.src = "./weather_icons/02n.png";
     } else if (day1IconId == "03d") {
        card1Icon.src = "./weather_icons/03d.png";
     } else if (day1IconId == "03n") {
        card1Icon.src = "./weather_icons/03n.png";
     } else if (day1IconId == "04d") {
        card1Icon.src = "./weather_icons/04d.png";
     } else if (day1IconId == "04n") {
        card1Icon.src = "./weather_icons/04n.png";
     } else if (day1IconId == "09d") {
        card1Icon.src = "./weather_icons/09d.png";
     } else if (day1IconId == "09n") {
        card1Icon.src = "./weather_icons/09n.png";
     } else if (day1IconId == "10d") {
        card1Icon.src = "./weather_icons/10d.png";
     } else if (day1IconId == "10n") {
        card1Icon.src = "./weather_icons/10n.png";
     } else if (day1IconId == "11d") {
        card1Icon.src = "./weather_icons/11d.png";
     } else if (day1IconId == "11n") {
        card1Icon.src = "./weather_icons/11n.png";
     } else if (day1IconId == "13d") {
        card1Icon.src = "./weather_icons/13d.png";
     } else if (day1IconId == "13n") {
        card1Icon.src = "./weather_icons/13n.png";
     } else if (day1IconId == "50d") {
        card1Icon.src = "./weather_icons/50d.png";
     } else if (day1IconId == "50n") {
        card1Icon.src = "./weather_icons/50n.png";
     }
    

//     ##################################
//##### SETTING TEMPS IN FORECAST CARDS ######
//     ##################################

    var day1TempKelvin = data.list[7].main.temp;
    console.log(day1TempKelvin);
    var day1TempFarenheit = (day1TempKelvin - 273.15) * 9 / 5 + 32;
    var cleanDay1TempFarenheit = parseInt(day1TempFarenheit);
    card1Temp.textContent = "Temp: " + cleanDay1TempFarenheit + "°F";

    var day2TempKelvin = data.list[15].main.temp;
    var day2TempFarenheit = (day2TempKelvin - 273.15) * 9 / 5 + 32;
    var cleanDay2TempFarenheit = parseInt(day2TempFarenheit);
    card2Temp.textContent = "Temp: " + cleanDay2TempFarenheit + "°F";

    var day3TempKelvin = data.list[23].main.temp;
    var day3TempFarenheit = (day3TempKelvin - 273.15) * 9 / 5 + 32;
    var cleanDay3TempFarenheit = parseInt(day3TempFarenheit);
    card3Temp.textContent = "Temp: " + cleanDay3TempFarenheit + "°F";

    var day4TempKelvin = data.list[31].main.temp;
    var day4TempFarenheit = (day4TempKelvin - 273.15) * 9 / 5 + 32;
    var cleanDay4TempFarenheit = parseInt(day4TempFarenheit);
    card4Temp.textContent = "Temp: " + cleanDay4TempFarenheit + "°F";

    var day5TempKelvin = data.list[39].main.temp;
    var day5TempFarenheit = (day5TempKelvin - 273.15) * 9 / 5 + 32;
    var cleanDay5TempFarenheit = parseInt(day5TempFarenheit);
    card5Temp.textContent = "Temp: " + cleanDay5TempFarenheit + "°F";



//     #####################################
//##### SETTING HUMIDITY IN FORECAST CARDS ######
//     #####################################

card1Humidity.textContent = "Humidity: " + data.list[7].main.humidity + "%";
card2Humidity.textContent = "Humidity: " + data.list[15].main.humidity + "%";
card3Humidity.textContent = "Humidity: " + data.list[23].main.humidity + "%";
card4Humidity.textContent = "Humidity: " + data.list[31].main.humidity + "%";
card5Humidity.textContent = "Humidity: " + data.list[39].main.humidity + "%";

//     ##################################
//##### SETTING WIND IN FORECAST CARDS ######
//     ##################################

var day1WindMS = data.list[7].wind.speed;
var day1WindMPH = day1WindMS * 2.237;
var day1CleanWind = parseInt(day1WindMPH);
card1Wind.textContent = "Wind: " + day1CleanWind + "MPH";

var day2WindMS = data.list[15].wind.speed;
var day2WindMPH = day2WindMS * 2.237;
var day2CleanWind = parseInt(day2WindMPH);
card2Wind.textContent = "Wind: " + day2CleanWind + "MPH";

var day3WindMS = data.list[23].wind.speed;
var day3WindMPH = day3WindMS * 2.237;
var day3CleanWind = parseInt(day3WindMPH);
card3Wind.textContent = "Wind: " + day3CleanWind + "MPH";

var day4WindMS = data.list[31].wind.speed;
var day4WindMPH = day4WindMS * 2.237;
var day4CleanWind = parseInt(day4WindMPH);
card4Wind.textContent = "Wind: " + day4CleanWind + "MPH";

var day5WindMS = data.list[39].wind.speed;
var day5WindMPH = day5WindMS * 2.237;
var day5CleanWind = parseInt(day5WindMPH);
card5Wind.textContent = "Wind: " + day5CleanWind + "MPH";



});
}
