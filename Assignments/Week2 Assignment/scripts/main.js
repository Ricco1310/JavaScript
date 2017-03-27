window.onload = function(){
    runPage();
};

function changingCounter(){
    var currentSpeedElement = document.getElementById("currentSpeed");
    var currentSpeed = Number(currentSpeedElement.innerHTML);
    var form = document.getElementById(form);
    var currentDistanceElement = document.getElementById("currentDistance");
    var currentDistance = Number(currentDistanceElement.innerHTML);
    var currentFuelElement = document.getElementById("currentFuel");
    var currentFuel = Number(currentFuelElement.innerHTML);
    var currentDistancePart = 1242000000;

    //Generates random number
    function randomRange(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function updateCounters(){
        //randomizes the speed, tries to keep it around 10000
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
        //updates the distance based on speed
        currentDistance += currentSpeed;
        currentDistanceElement.innerHTML = currentDistance;
        //update fuel
        if (currentDistance > currentDistancePart){
            currentFuel--;
            currentDistancePart += currentDistancePart;
        }
    }
    setInterval(updateCounters,100);
}

function starLog(){
    var starlog = document.getElementById("form");
    var formName = document.getElementById("formName");
    var formDate = document.getElementById("formDate");
    var formMessage = document.getElementById("formMessage");
    var latestName = document.getElementById("latestName");
    var latestDate = document.getElementById("latestDate");
    var latestMessage = document.getElementById("latestMessage");
    starlog.onsubmit = function(){
        alert(0);
        latestName.innerHTML = formName.value;
        latestDate.innerHTML = formDate.value;
        latestMessage.innerHTML = formMessage.value;
        formName.value = "";
        formDate.value = "";
        formMessage.value = "";
        return false;
    }
}

function mouseOverImage(){
    var animating = false;
    var opacityImage = 1;
    var opacitytext = 0;
    var landingImage = document.getElementById("landingImage");
    var landingText = document.getElementById("landingText");

    function changeOpacity(direction){
        if (animating == false){
            if (direction == true){
                //show opacitytext
                //animating = true until done
                landingImage.style.opacity = 0.3;
                landingText.style.opacity = 1;
            }
            else if(direction == false){
                landingImage.style.opacity = 1;
                landingText.style.opacity = 0;
            }
        }
    }

    landingImage.onmouseenter = function(){
        changeOpacity(true);
    }
    
    landingImage.onmouseleave = function(){
        changeOpacity(false);
    }
}

function getClock(){
    var earthTime = document.getElementById("earthTime");
    setInterval(function(){
        var currentDate = new Date();
        earthTime.innerHTML = currentDate.toUTCString();
        },100
    )
}

function runPage(){
    changingCounter();
    starLog();
    mouseOverImage();
    getClock();
}