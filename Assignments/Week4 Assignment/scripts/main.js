var clockSetter = document.getElementById("clockSetter");
var t1 = new TimelineMax();
var t2 = new TimelineMax();

var UTC = true;

function updateTime(localTime, localDate, utcTime) {
    var dateDataArray = computeDateData(utcTime);
    localTime.innerHTML = dateDataArray[0] + ":" + dateDataArray[1] + ":" + dateDataArray[2];
}

function changeUTCtoLocale(){
    UTC = !UTC;
}

function computeDateData(utcTime) {
    if (UTC) {
        //array with all data going year to seconds in utc format
        var dateDataArray = [
            //0
            utcTime.getUTCHours(),
            //1
            utcTime.getUTCMinutes(),
            //2
            utcTime.getUTCSeconds()
        ];
    } else {
        //array with all data going year to seconds in locale format
        var dateDataArray = [
            //0
            utcTime.getHours(),
            //1
            utcTime.getMinutes(),
            //2
            utcTime.getSeconds()
        ];
    }

    for (var i = 0; i < dateDataArray.length; i++) {
        if (dateDataArray[i] < 10) {
            dateDataArray[i] = "0" + dateDataArray[i];
        }
    }
    return dateDataArray;
}

function dayNumberToName(dayNumber) {
    var dayNameArray = ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"];
    return dayNameArray[dayNumber];
}

function animateClock(utcTime) {
    if (utcTime.getUTCSeconds() % 2 == 0) {
        t1.to("#clockSetter", 0.5, { scale: 2 })
    } else {
        t1.to("#clockSetter", 0.5, { scale: 1 })
    }
}

window.onclick = function () {
    changeUTCtoLocale();
}

window.onload = function () {
    setInterval(function () {
        var utcTime = new Date();
        updateTime(clockSetter, dateSetter, utcTime);
        animateClock(utcTime);
    }, 500);
}
