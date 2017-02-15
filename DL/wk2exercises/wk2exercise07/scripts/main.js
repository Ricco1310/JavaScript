

var student1 = {name: 'Chris', birthday: new Date(1981, 1, 16), jsSkill: 5};
var student2 = {name: 'Tim', birthday: new Date(1979, 3, 25), jsSkill: 6};

function showDetails(){
	console.log(this.name +' was born in ' + this.birthday.getFullYear() + ' and scores '+ this.jsSkill+ ' at JavaScript.');
}

function levelUp(){
	this.jsSkill++;
	console.log(this.name + ' just leveled up, his current skill is ' + this.jsSkill);
}

student1.logStudent = showDetails;
student2.logStudent = showDetails;

student1.levelUp = levelUp;
student2.levelUp = levelUp;

student1.logStudent();
student2.logStudent();

student1.levelUp();
student1.logStudent();