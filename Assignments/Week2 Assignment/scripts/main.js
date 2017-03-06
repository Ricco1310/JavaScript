window.onload = function(){
    runPage();
};

function runPage(){
    var currentSpeedElement = document.getElementById("currentSpeed");
    var currentSpeed = Number(currentSpeedElement.innerHTML);
    var form = document.getElementById(form);

    function randomRange(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function runSpeed(){
        if(currentSpeed<8000){
            currentSpeed += randomRange(-50,200);
            currentSpeedElement.innerHTML = currentSpeed;
        }
        else if(currentSpeed>12000){
            currentSpeed += randomRange(-200,50);
            currentSpeedElement.innerHTML = currentSpeed;
        }
        else {
            currentSpeed += randomRange(-100,100);
            currentSpeedElement.innerHTML = currentSpeed;
        }
    }
    setInterval(runSpeed,100);
}