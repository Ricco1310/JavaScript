// 1
var introduction = document.getElementById("introduction");
introduction.innerHTML = 'This is the introduction'; 

//2
var mainTitle = document.getElementsByTagName('h1')[0];
mainTitle.innerHTML = 'Types of Pretty Guitars';	

//3
var bass = document.getElementsByClassName('bass');
for(var i=0; i<bass.length; i++){
	bass[i].innerHTML = 'Bass players suck';	
}	

//4
var artists = document.getElementsByClassName('artist');
for(var i=0; i<artists.length; i++){
	artists[i].innerHTML += '*';
}	

//5
var styles = document.getElementsByClassName('style');
for(var i=0; i<styles.length; i++){
	styles[i].innerHTML = styles[i].innerHTML.toUpperCase(); 
}

//6
var acoustic = document.getElementById('Acoustic');
acoustic.className = 'highlight';

//7 
var firstLink = document.getElementsByTagName('a')[0];
firstLink.setAttribute('href', 'http://www.google.com');
