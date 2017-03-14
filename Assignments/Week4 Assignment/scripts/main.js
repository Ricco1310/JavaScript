var clockSetter = document.getElementById("clockSetter");
var dateSetter = document.getElementById("dateSetter")

function updateTime(localTime, localDate, utcTime){    
    //day in month
    var Tdate = utcTime.getUTCDate();
    //current year
    var TfullYear = utcTime.getUTCFullYear();
    //day in week
    var Tday = utcTime.getUTCDay();
    //month in year
    var Tmonth = utcTime.getUTCMonth();
    //Hours in a day
    var Thours = utcTime.getUTCHours();
    //Minutes in an hour
    var Tminutes = utcTime.getUTCMinutes();
    //Seconds in a minute
    var Tseconds = utcTime.getUTCSeconds();
    //give the day a name
    TdayName = dayNumberToName(Tday);
    //update html date
    localDate.innerHTML = TdayName + " " + Tdate + " " + Tmonth + " " + TfullYear;
    //update html time
    localTime.innerHTML = Thours + " " + Tminutes + " " + Tseconds;
}

function dayNumberToName(Tday){
    switch (Tday) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
    }
}

//setInterval(updateTime, 1000, clockSetter, dateSetter);
setInterval(function(){
    var utcTime = new Date();
    updateTime(clockSetter, dateSetter, utcTime);
}
, 1000);

/*
var clockSetter = document.getElementById("clockSetter");
var dateSetter = document.getElementById("dateSetter")

function updateTime(localTime, localDate, utcTime){    
    computeDateData(utcTime);
    //update html date
    localDate.innerHTML = dateDataArray[7] + " " + dateDataArray[2] + " " + dateDataArray[1] + " " + dateDataArray[0];
    //update html time
    localTime.innerHTML = dateDataArray[4] + " " + dateDataArray[5] + " " + dateDataArray[6];
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
    return dateDataArray[];
}

function dayNumberToName(Tday){
    switch (Tday) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
    }
}

//setInterval(updateTime, 1000, clockSetter, dateSetter);
setInterval(function(){
    var utcTime = new Date();
    updateTime(clockSetter, dateSetter, utcTime);
}
, 1000);
*/