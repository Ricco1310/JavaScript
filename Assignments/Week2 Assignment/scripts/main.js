window.onload = function(){
    runPage();
};

function changingSpeed(){
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
    opacityImage = 1;
    opacitytext = 0;
    var landingImage = document.getElementById("landingImage");
    var landingText = document.getElementById("landingText");
    landingImage.onmouseenter = function(){
        var landingImageAnimate
        landingImage.style.opacity = 0.3;
        landingText.style.opacity = 1;
    }
    landingImage.onmouseleave = function(){
        var landingTextAnimate
        landingImage.style.opacity = 1;
        landingText.style.opacity = 0;
    }
}

function runPage(){
    changingSpeed();
    starLog();
    mouseOverImage();
}