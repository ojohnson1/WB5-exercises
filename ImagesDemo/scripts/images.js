"use strict"



window.onload=function(){
    const allPTags = document.getElementsByTagName('p')
    Array.from(allPTags).forEach(function (element) {
        element.style.border = "1px solid black";
    });

}