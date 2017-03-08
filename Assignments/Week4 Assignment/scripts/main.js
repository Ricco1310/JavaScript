var clockSetter = document.getElementById("clockSetter");
var dateSetter = document.getElementById("dateSetter")

function updateTime(){
    var utcTime = new Date();
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
    dateSetter.innerHTML = TdayName + " " + Tdate + " " + Tmonth + " " + TfullYear;
    //update html time
    clockSetter.innerHTML = Thours + " " + Tminutes + " " + Tseconds;
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

setInterval(updateTime, 1000);