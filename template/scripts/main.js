var newFooter = document.createElement("footer");
var newFooterParagraph = document.createElement("p");
var newFooterParagraphText = document.createTextNode("copyright: I don't know media.");

newFooterParagraph.appendChild(newFooterParagraphText);
newFooter.appendChild(newFooterParagraph);
document.body.appendChild(newFooter);