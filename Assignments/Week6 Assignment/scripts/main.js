var request;
var weatherTempElement = document.getElementById("temp");
var placeNameElement = document.getElementById("name");
var flagImgElement = document.getElementById("countryFlag");
var countryElement = document.getElementById("country");
var tempMinElement = document.getElementById("tempMin");
var tempMaxElement = document.getElementById("tempMax");
var weatherTypeElement = document.getElementById("weatherType");
var funFactElement = document.getElementById("funFact");

var bamakoButton = document.getElementById("bamako");
var astanaButton = document.getElementById("astana");
var magadanButton = document.getElementById("magadan");

var Astana = {
    country: "Republic of Kazakhstan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg",
    lnglat: { lat: 51.144695, lng: 71.478844 },
    name: "Astana",
    temp,
    tempMin,
    tempMax,
    weatherDescription: undefined,
    weatherIcon: "http://openweathermap.org/img/w/",
    roundTemp: function () {
        this.temp *= 100;
        this.temp = Math.round(this.temp);
        this.temp /= 100;
        return this.temp;
    },
    funFact1: "Astana is the second coldest capital city in the world after Ulaanbaatar, Mongolia."
};
var Bamako = {
    country: "Republic of Mali",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg",
    lnglat: { lat: 12.6128897, lng: -8.1355973 },
    name: "Bamako",
    temp,
    tempMin,
    tempMax,
    weatherDescription: undefined,
    weatherIcon: "http://openweathermap.org/img/w/",
    roundTemp: function () {
        this.temp *= 100;
        this.temp = Math.round(this.temp);
        this.temp /= 100;
        return this.temp;
    },
    funFact1: "Bamako was a leading center of Muslim learning under the Mali empire (c.11th–15th century) but by the 19th century had declined into a small village"
};
var Magadan = {
    country: "Russian Federation",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
    lnglat: { lat: 59.5676376, lng: 150.7512485 },
    name: "Magadan",
    temp,
    tempMin,
    tempMax,
    weatherDescription: undefined,
    weatherIcon: "http://openweathermap.org/img/w/",
    funFact1: " The nearest city, Yakutsk is 2,000 kms away."
};

makeRequest();
setInterval(function () {
    if (astanaButton.className == "active") {
        renderAstana();
    } else if (bamakoButton.className == "active") {
        renderBamako();
    } else if (magadanButton.className == "active") {
        renderMagadan();
    } else {
        console.log("No active class found");
    }
}, 100);

function renderAstana() {
    weatherTempElement.innerHTML = Astana.temp;
    placeNameElement.innerHTML = Astana.name;
    flagImgElement.src = Astana.flag;
    countryElement.innerHTML = Astana.country;
    tempMinElement.innerHTML = Astana.tempMin;
    tempMaxElement.innerHTML = Astana.tempMax;
    weatherTypeElement.innerHTML = Astana.weatherDescription;
    funFactElement.innerHTML = Astana.funFact1;
}

function renderBamako() {
    weatherTempElement.innerHTML = Bamako.temp;
    placeNameElement.innerHTML = Bamako.name;
    flagImgElement.src = Bamako.flag;
    countryElement.innerHTML = Bamako.country;
    tempMinElement.innerHTML = Bamako.tempMin;
    tempMaxElement.innerHTML = Bamako.tempMax;
    weatherTypeElement.innerHTML = Bamako.weatherDescription;
    funFactElement.innerHTML = Bamako.funFact1;
}

function renderMagadan() {
    weatherTempElement.innerHTML = Magadan.temp;
    placeNameElement.innerHTML = Magadan.name;
    flagImgElement.src = Magadan.flag;
    countryElement.innerHTML = Magadan.country;
    tempMinElement.innerHTML = Magadan.tempMin;
    tempMaxElement.innerHTML = Magadan.tempMax;
    weatherTypeElement.innerHTML = Magadan.weatherDescription;
    funFactElement.innerHTML = Magadan.funFact1;
}

window.onclick = function () {
    console.log(Astana);
    console.log(Bamako);
    console.log(Magadan);
}

function makeRequest() {
    request = new XMLHttpRequest();
    request.open("GET", "http://api.openweathermap.org/data/2.5/group?id=1526273,2460596,2123628&units=metric&appid=5ca1a1bb78a4056d2fc623093688fa89");
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
    console.log(currentWeather);
    Astana.temp = currentWeather.list[0].main.temp;
    Bamako.temp = currentWeather.list[1].main.temp;
    Magadan.temp = currentWeather.list[2].main.temp;
    Astana.tempMin = currentWeather.list[0].main.temp_min;
    Bamako.tempMin = currentWeather.list[1].main.temp_min;
    Magadan.tempMin = currentWeather.list[2].main.temp_min;
    Astana.tempMax = currentWeather.list[0].main.temp_max;
    Bamako.tempMax = currentWeather.list[1].main.temp_max;
    Magadan.tempMax = currentWeather.list[2].main.temp_max;
    Astana.weatherIcon += currentWeather.list[0].weather[0].icon + ".png";
    Bamako.weatherIcon += currentWeather.list[1].weather[0].icon + ".png";
    Magadan.weatherIcon += currentWeather.list[2].weather[0].icon + ".png";
    Astana.weatherDescription = currentWeather.list[0].weather[0].description;
    Bamako.weatherDescription = currentWeather.list[1].weather[0].description;
    Magadan.weatherDescription = currentWeather.list[2].weather[0].description;
}

function updateUIError() {
    console.log("error");
}

function initMap() {
    //generates the style sheet
    var blueStyle = [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#193341"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#2c5a71"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#29768a"
                },
                {
                    "lightness": -37
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#406d80"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#406d80"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#3e606f"
                },
                {
                    "weight": 2
                },
                {
                    "gamma": 0.84
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "weight": 0.6
                },
                {
                    "color": "#1a3541"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#2c5a71"
                }
            ]
        }
    ]
    //places the map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: Astana.lnglat,
        styles: blueStyle
    });

    //the text boxes's content
    var contentStringAstana = '<div id="infoBox">Astana, Kazakhstan</div>';
    var contentStringBamako = '<div id="infoBox">Bamako, Mali</div>';
    var contentStringMagadan = '<div id="infoBox">Magadan, Russia</div>';

    //each infowindow
    var infowindowAstana = new google.maps.InfoWindow({
        content: contentStringAstana
    });

    var infowindowBamako = new google.maps.InfoWindow({
        content: contentStringBamako
    });

    var infowindowMagadan = new google.maps.InfoWindow({
        content: contentStringMagadan
    });

    //each marker
    var markerAstana = new google.maps.Marker({
        position: Astana.lnglat,
        map: map,
        title: 'Astana, KZ',
        icon: Astana.weatherIcon
    });

    var markerBamako = new google.maps.Marker({
        position: Bamako.lnglat,
        map: map,
        title: 'Bamako, Mali',
        icon: Bamako.weatherIcon
    });

    var markerMagadan = new google.maps.Marker({
        position: Magadan.lnglat,
        map: map,
        title: 'Magadan, Russia',
        icon: Magadan.weatherIcon
    });

    //these are all the infowindows
    markerBamako.addListener('click', function () {
        infowindowBamako.open(map, markerBamako);
    });

    markerMagadan.addListener('click', function () {
        infowindowMagadan.open(map, markerMagadan);
    });

    markerAstana.addListener('click', function () {
        infowindowAstana.open(map, markerAstana);
    });

    //These are all the button updates
    bamakoButton.addEventListener("click", function () {
        bamakoButton.className = "active";
        astanaButton.className = "";
        magadanButton.className = "";
        map.panTo(Bamako.lnglat);
        placeNameElement.innerHTML = Bamako.name;
        weatherTempElement.innerHTML = Bamako.temp;
        //initMap();
    });

    astanaButton.addEventListener("click", function () {
        bamakoButton.className = "";
        astanaButton.className = "active";
        magadanButton.className = "";
        map.panTo(Astana.lnglat);
        placeNameElement.innerHTML = Astana.name;
        weatherTempElement.innerHTML = Astana.temp;
        //initMap();
    });

    magadanButton.addEventListener("click", function () {
        bamakoButton.className = "";
        astanaButton.className = "";
        magadanButton.className = "active";
        map.panTo(Magadan.lnglat);
        placeNameElement.innerHTML = Magadan.name;
        weatherTempElement.innerHTML = Magadan.temp;
        //initMap();
    });
}