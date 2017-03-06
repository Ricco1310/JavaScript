var currentSpeed = document.getElementById("currentSpeed").innerHTML;
setInterval(runSpeed);
function runSpeed(currentSpeed){
    if(currentSpeed<7800){
        alert("LOW");
        currentSpeed += 300;
        alert(currentSpeed);
    }
    else if(currentSpeed>8000){
        alert("HIGH");
        currentSpeed -= 300;
        alert(currentSpeed);
    }
    else {
        alert("MID");
        currentSpeed -= 300;
        alert(currentSpeed);
    }
}