"use strict";

let menu = [
  [
    { item: "Sausage and Egg Biscuit", price: 3.69 },
    { item: "Bacon and Egg Biscuit", price: 3.49 },
    { item: "Ham and Egg Biscuit", price: 3.29 },
  ],
  [
    { item: "Pasta", price: 13.69 },
    { item: "Brisket", price: 14.49 },
    { item: "Soup", price: 12.29 },
    { item: "Stir Fry", price: 14.69 },
  ],
  [
    { item: "Steak", price: 12.99 },
    { item: "Chicken", price: 26.49 },
    { item: "Egg Roll", price: 16.59 },
    { item: "Fried Rice", price: 20.69 },
    { item: "Eggplant Parmigiana", price: 31.69 },
  ],
];

let meal = 1;
if (meal == 0) {
  console.log("Breakfast Menu");
} else if (meal == 1) {
  console.log("Lunch Menu");
} else if (meal == 2) {
  console.log("Dinner Menu");
} else {
  console.log("Wrong Choice");
}

menu[meal].forEach( (menuitem) => console.log(menuitem.item));

// menu.forEach function (meal){
//  if(meal == 0){
//      console.log( `Breakfast Menu \n`)

// }

//  }
