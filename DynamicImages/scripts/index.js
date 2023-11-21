"use strict";

let imageFiles = [
  { name: "images/dog.jpg", description: "A cute dog" },
  { name: "images/dominoes.jpg", description: "A set of dominoes" },
  { name: "images/hills.jpg", description: "Scenic hills landscape" },
  { name: "images/money.jpg", description: "Stack of money bills" },
  { name: "images/tiger.jpg", description: "A majestic tiger" },
];
const selectBtn = document.getElementById("selectBtn");
const resetBtn = document.getElementById("resetBtn");
const dropdown = document.getElementById("dropdown");
const imgDiv = document.getElementsByClassName("imgDiv");

window.onload = function  () {
DropDownDescriptionInit();

};

function DropDownDescriptionInit(){
    for (let img of imageFiles) {
        let TheOption= new Option(img.description);
        dropdown.appendChild(TheOption)
        }
}

//This is for showing the img
//let selectedDescription = dropdown.value;
//if (selectedDescription == imageFiles.description) {
//}