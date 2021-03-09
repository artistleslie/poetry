//this javascript file will iterate thru the pix in a file somewhere

//declare 3 global variables to act as a counter, an array of image urls, and a reference
//to the image element object
var i, imgs, pic;

//an init function tht begins by getting a reference to the image element object
function init()
{
    owlPix=doc.getElementById("pic");

}
document.addEventListener("DOMContentLoaded", init, false);

//create an array of image urls
imgs=["owl1.jpg", "owl2.jpg", "owl3.jpg"]