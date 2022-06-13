var city = document.getElementById("city");
var buttonEl = document.getElementById("btn");


var getWeather = function(lat, lon) {
    var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely,alerts&units=imperial&appid=a5ced7e77d535bc3705ec8febf88bf5d";
    fetch(oneCallUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
        })
    });
};


var getCords = function(cityName) {
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=a5ced7e77d535bc3705ec8febf88bf5d";

    fetch(apiUrl)
    .then(function(response) {
        return response.json();
    }).then(function(data){
        console.log(data);
        console.log(data[0].lat);
        console.log(data[0].lon);
        getWeather(data[0].lat, data[0].lon);
    })
};

buttonEl.addEventListener("click", function(){
    getCords(city.value);
})

