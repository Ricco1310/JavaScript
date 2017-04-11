var request;
var weatherElement = document.getElementById("temp");

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
            console.log("Request done good");
        } else {
            updateUIError();
            console.log("Request done bad");
        }
    }
}

function updateUISucces(responseText) {
    console.log("ok");
    var currentWeather = JSON.parse(request.responseText);
    var temp = currentWeather.main.temp - 272.15;
    temp *= 100;
    temp = Math.round(temp);
    temp /= 100;
    weatherElement.innerHTML = temp;
}

function updateUIError() {
    console.log("error")
}

function initMap() {
    var place = 0;
    var bamako = {lat: 12.612582, lng: -8.0655534};
    var astana = {lat: 51.144695, lng: 71.478844};
    var ola = {lat: 59.5802402, lng: 151.2781806};

    var p = [
         {lat: 12.612582, lng: -8.0655534},
         {lat: 51.144695, lng: 71.478844},
         {lat: 59.5802402, lng: 151.2781806}
    ];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: p[0]
    });
    var marker = new google.maps.Marker({
        position: p[0],
        map: map
    });
}
