var clockSetter = document.getElementById("clockSetter");
var dateSetter = document.getElementById("dateSetter");
var t1 = new TimelineMax({repeat: -1});

function updateTime(localTime, localDate, utcTime){    
    var dateDataArray = computeDateData(utcTime);
    //update html date
    localDate.innerHTML = dateDataArray[7] + " " + dateDataArray[2] + "-" + dateDataArray[1] + "-" + dateDataArray[0];
    //update html time
    localTime.innerHTML = dateDataArray[4] + ":" + dateDataArray[5] + ":" + dateDataArray[6];
}

function computeDateData(utcTime){
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
    for (var i = 0; i < dateDataArray.length; i++){
        if (dateDataArray[i]<10){
            dateDataArray[i] = "0" + dateDataArray[i];
        }
    }
    return dateDataArray;
}

function dayNumberToName(dayNumber){
    var dayNameArray = ["Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"];
    return dayNameArray[dayNumber];
}

function animateClock(){
    t1.to("#clockSetter", 1, {fontSize:300})
    .to("#clockSetter", 1, {fontSize:150})
}

//setInterval(updateTime, 1000, clockSetter, dateSetter);
setInterval(function(){
    var utcTime = new Date();
    updateTime(clockSetter, dateSetter, utcTime);
}
, 500);

animateClock();
