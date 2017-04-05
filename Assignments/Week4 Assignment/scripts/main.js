var clockSetter = document.getElementById("clockSetter");
var dateSetter = document.getElementById("dateSetter");
var t1 = new TimelineMax();
var t2 = new TimelineMax();

function updateTime(localTime, localDate, utcTime) {
    var dateDataArray = computeDateData(utcTime);
    //update html date
    //localDate.innerHTML = dateDataArray[7] + " " + dateDataArray[2] + "-" + dateDataArray[1] + "-" + dateDataArray[0];
    //update html time
    localTime.innerHTML = dateDataArray[4] + ":" + dateDataArray[5] + ":" + dateDataArray[6];
}

function computeDateData(utcTime) {
    //array with all data going year to seconds
    var dateDataArray = [
        //0
        utcTime.getUTCFullYear(),
        //1
        utcTime.getUTCMonth(),
        //2
        utcTime.getUTCDate(),
        //3
        utcTime.getUTCDay(),
        //4
        utcTime.getUTCHours(),
        //5
        utcTime.getUTCMinutes(),
        //6
        utcTime.getUTCSeconds(),
        //7
        dayNumberToName(utcTime.getUTCDay())
    ];
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
function animateBackground(utcTime) {
    var opacityAnimating = false;
    if(utcTime.getUTCSeconds() % 10 == 0){
        opacityAnimating = !opacityAnimating;
        console.log(42);
        
    }
    if (opacityAnimating) {
        console.log("Opacity low");
        t2.to("#backgroundImage", 1, { opacity: 0.2 })
    } else {
        console.log("Opacity update");
        t2.to("#backgroundImage", 1, { opacity: 1 })
    }
}


//setInterval(updateTime, 1000, clockSetter, dateSetter);
window.onload = function () {
    setInterval(function () {
        var utcTime = new Date();
        updateTime(clockSetter, dateSetter, utcTime);
        animateClock(utcTime);
        animateBackground(utcTime);
    }, 500);

}
    ;
