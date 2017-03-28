var pos = 200;
document.getElementById("mainHeading").onmouseover = function(){
    pos += 100;
    var tl1 = new TimelineMax();
    tl1.to("#mainHeading", 2, {left: pos, color:"rgb(255,0,0)", ease: Bounce.easeOut});
};