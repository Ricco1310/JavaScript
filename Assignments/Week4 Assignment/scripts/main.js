var clockSetter = document.getElementById("clockSetter");
var dateSetter = document.getElementById("dateSetter");

var clockSetterPreOut = document.getElementById("clockSetterPreOut");
var dateSetterPreOut = document.getElementById("dateSetterPreOut");

var clockSetterPre = document.getElementById("clockSetterPre");
var dateSetterPre = document.getElementById("dateSetterPre");

var clockSetterPast = document.getElementById("clockSetterPast");
var dateSetterPast = document.getElementById("dateSetterPast");

var clockSetterPastOut = document.getElementById("clockSetterPastOut");
var dateSetterPastOut = document.getElementById("dateSetterPastOut");

var t1 = new TimelineMax();

function updateTime(elementToChangeDate, elementToChangeClock) {
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

    //elementToChangeDate.innerHTML = TdayName + " " + Tdate + " " + Tmonth + " " + TfullYear;
    //update html time
    elementToChangeDate.children[0].innerHTML = TdayName;
    elementToChangeDate.children[1].innerHTML = Tdate;
    elementToChangeDate.children[2].innerHTML = Tmonth;
    elementToChangeDate.children[3].innerHTML = TfullYear;
    //elementToChangeClock.innerHTML = Thours + " " + Tminutes + " " + Tseconds;
    elementToChangeClock.children[0].innerHTML = Thours;
    elementToChangeClock.children[1].innerHTML = Tminutes;
    elementToChangeClock.children[2].innerHTML = Tseconds;
}

function dayNumberToName(Tday) {
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

setInterval(updateTime(dateSetterPreOut, clockSetterPreOut), 100);
setInterval(updateTime(dateSetterPre, clockSetterPre), 100);
setInterval(updateTime(dateSetter, clockSetter), 100);
setInterval(updateTime(dateSetterPast, clockSetterPast), 100);
setInterval(updateTime(dateSetterPastOut, clockSetterPastOut), 100);
setInterval(pushTime(), 1000);


//start of animation coding

function pushTime() {
    t1.to("#dateSetterPreOut", 2, { color: "rgb(0,0,0)" })
    t1.to("#clockSetterPreOut", 2, { color: "rgb(0,0,255)" })

    t1.to("#dateSetterPre", 2, { color: "rgb(0,255,0)" })
    t1.to("#clockSetterPre", 2, { color: "rgb(255,0,0)" })

    t1.to("#dateSetter", 2, { color: "rgb(0,255,0)" })
    t1.to("#clockSetter", 2, { color: "rgb(255,0,0)" })

    t1.to("#dateSetterPast", 2, { color: "rgb(0,255,0)" })
    t1.to("#clockSetterPast", 2, { color: "rgb(255,0,0)" })

    t1.to("#dateSetterPastOut", 2, { color: "rgb(0,255,0)" })
    t1.to("#clockSetterPastOut", 2, { color: "rgb(255,0,0)" })
}