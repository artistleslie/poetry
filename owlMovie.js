//this javascript file will iterate thru the pix in a file somewhere

//declare 3 global variables to act as a counter, an array of image urls, and a reference
//to the image element object
var i, imgsArray, pic;

function rotate()
{
pic.src=imgsArray[i]; //assign an image url
//then change the counter
(i ===(imgsArray.length-1))?(i=0) : (i++);
setTimeout(rotate, 1000);
}

//an init function tht begins by getting a reference to the image element object
function init()
{
 pic=document.getElementById("pic");

    //create an array of image urls
  imgsArray=["owl1.jpg", "owl2.jpg", "owl3.jpg"];

    var preload = new Array();
for (i=0; i<imgsArray.length; i++)
{
    preload[i] = new Image();
    preload[i].src=imgsArray[i];
}
i=0;
Rotate();

document.addEventListener("DOMContentLoaded", init, false);



//
//pix=new Array(100);
// for (i=0;i<100;i++){
    //pix[i]=new Image;
    //pix[i].src="owl"+(i+1)+".jpg";
//}