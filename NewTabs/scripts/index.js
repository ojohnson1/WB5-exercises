"use strict";

window.onload = function () {
  const googleBtn = document.getElementById("googleBtn");
   const w3Btn =document.getElementById("w3Btn");
   const imagesBtn =document.getElementById("imageBtn");
   googleBtn.onclick = googleBtnClick;
   w3Btn.onclick = w3BtnClick;
  imagesBtn.onclick = imgPageClick;

};

function googleBtnClick(){
  window.open('https://www.google.com')
}

 function w3BtnClick(){
  window.open('https://www.w3schools.com')
   }

   function imgPageClick(){
     window.open('images.html','_self');
   }