var time = document.getElementById("time");
var timer = 0;
var timeRunning = false;
function showTime(){
    time.innerHTML = timer;
    timer++;
}
function runTime(){
    if(timeRunning){
        showTime;
    }
}
document.onclick = function(){
    timeRunning = !timeRunning;
};