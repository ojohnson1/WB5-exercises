"use strict"

window.onload =function(){
    const imageGroupDivs = document.getElementsByClassName("imageGroup");

//   for(let i = 0; i < imageGroupDivs.length; i++){
//     let imageGroupDiv = imageGroupDivs[i];

//       imageGroupDiv.style.border = "2px solid red";}

Array.from(imageGroupDivs).forEach(function (element) {
        element.style.border = "2px solid red";
    });
    

}


const img = document.querySelectorAll(":not([alt])");
Array.from(img).forEach(function(element) {
  element.alt = "graffiti img";
});
