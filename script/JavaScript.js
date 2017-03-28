var api = "http://api.openweathermap.org/data/2.5/weather?q=London,uk";
var key = "5ca1a1bb78a4056d2fc623093688fa89";
var request;
var tempElement = document.getElementById("weather");

makeRequest();

function makeRequest() {
    request = new XMLHttpRequest();
    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5ca1a1bb78a4056d2fc623093688fa89");
    request.onreadystatechange = responseMethod;
    request.send();
}

function responseMethod() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            updateUISucces(request.responseText);
            console.log("Request done");
        } else {
            updateUIError();
            console.log("Request done");
        }
    }
}

function updateUISucces(responseText) {
    console.log("ok");
    var currentWeather = JSON.parse(request.responseText);
    var temp = currentWeather.main.temp - 272.15;
    Math.round(temp);
    tempElement.innerHTML = temp;
}

function updateUIError() {
    console.log("error")
}