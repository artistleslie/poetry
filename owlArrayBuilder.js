//create an array that can hold 100 pix

//declare 3 global variables to act as a counter, an array of image urls, and a reference
//to the image element object
var i, owlArray, owl;


owlArray=new Array(100);
    for (i=0;i<100;i++){
        owlArray[i]=new Image;
        owlArray[i].src="owl"+(i+1)+".jpg";
    }

