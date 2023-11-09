"use strict"



window.onload=function(){
    const allPTags = document.getElementsByTagName('p')
    Array.from(allPTags).forEach(function (element) {
        element.style.border = "1px solid black";
    });

    const allImgs = document.getElementsByTagName("img");
    Array.from(allImgs).forEach(function (element) {
        
        element.className="roundedImg"
        element.src = "images/space-photo1.png";
        element.alt = "spacephoto";

    });

}


