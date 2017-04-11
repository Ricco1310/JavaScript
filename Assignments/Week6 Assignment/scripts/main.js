var request;
var weatherTempElement = document.getElementById("temp");
var placeNameElement = document.getElementById("name");
var Astana = { Country: "Kazakhstan",
                flag: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg",
                lnglat: { lat: 51.144695, lng: 71.478844 },
                name,
                temp,
                roundTemp: function(){
                    this.temp *= 100;
                    this.temp = Math.round(this.temp);
                    this.temp /= 100;
                    return this.temp;
                },
                funFact1: "Wondering how to say the name of this vibrant city? It’s pronounced As-tah-nuh." };

makeRequest();

function makeRequest() {
    request = new XMLHttpRequest();
    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=1526273&units=metric&appid=5ca1a1bb78a4056d2fc623093688fa89");
    request.onreadystatechange = respond;
    request.send();
}

function respond() {
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
    Astana.temp = currentWeather.main.temp;
    Astana.name = currentWeather.name;
    Astana.temp = Astana.roundTemp();
    console.log(currentWeather);

    weatherTempElement.innerHTML = Astana.temp;
    placeNameElement.innerHTML = Astana.name;
}

function updateUIError() {
    console.log("error")
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: Astana.lnglat
    });
    var marker = new google.maps.Marker({
        position: Astana.lnglat,
        map: map
    });
}
