

var today = new Date();
var birthday = new Date(1981, 1, 16);

var age = today.getTime() - birthday.getTime();

alert(age);


// alert(age / 1000 / 60 / 60 / 24/ 365.25);