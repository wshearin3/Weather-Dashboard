var APIKey = "79c8885bec0fbdcd642a8ba60c566561";
var city;

function getWeatherAPI(){

var queryURL ="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)
.then(function (response){
    return response.json();
})
.then(function (data){

});
}