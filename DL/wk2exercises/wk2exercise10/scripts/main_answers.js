//1
var body = document.getElementsByTagName('body')[0]
var copyrightNode = document.createElement('footer');
var copyrightText = document.createTextNode('copyright: I don\'t know media.');

copyrightNode.appendChild(copyrightText);
body.appendChild(copyrightNode);

//2
var acoustic = document.getElementById('Acoustic');
var ukeleleNode = document.createElement('p');
var ukeleleTitleNode = document.createElement('em');
var ukeleleTitleText = document.createTextNode('Ukuleles');
ukeleleNode.appendChild(ukeleleTitleNode);
ukeleleTitleNode.appendChild(ukeleleTitleText);
var ukeleleText = document.createTextNode(' are commonly associated with music from Hawaii where the name roughly translates as "jumping flea", perhaps because of the movement of the player\'s fingers. Legend attributes it to the nickname of the Englishman Edward William Purvis, one of King Kalākaua\'s officers, because of his small size, fidgety manner, and playing expertise. According to Queen Liliʻuokalani, the last Hawaiian monarch, the name means "the gift that came here", from the Hawaiian words uku (gift or reward) and lele (to come).');

ukeleleNode.setAttribute('id', 'Ukelele');
ukeleleNode.appendChild(ukeleleText);
acoustic.appendChild(ukeleleNode);

//3
var acousticList = document.getElementsByTagName('ul')[1];

var newLiNode = document.createElement('li');
var newLinkNode = document.createElement('a');
var newLinkText = document.createTextNode('Ukelele');
newLinkNode.setAttribute('href', '#Ukelele');

newLinkNode.appendChild(newLinkText);
newLiNode.appendChild(newLinkNode);
acousticList.appendChild(newLiNode);
