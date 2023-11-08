"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Reese Peanut ButterCups", price: 3.29},
    {product: "Starburst", price: 1.89},
    {product: "Gummy Bears", price: 7.29},
    {product: "Mike & Ike's", price: 6.29},
    {product: "PayDay", price: 1.87},
    {product: "Babe Ruth", price: 4.59},
    {product: "Milky Way", price: 3.89},
    {product: "Chocolate Bar", price: 1.40},
    {product: "Snickers", price: 3.99},
    {product: "Sour Patches", price: 5.79},
   ];
 

// Which candies costs less than $4.00?

let cheapCandy= products.filter((product) => product.price < 4);
 cheapCandy.forEach((candy) => console.log(candy.product));

// console.log(cheapCandy);

// for(let candy of cheapCandy){
//     console.log(candy.product);
// }

// Which candies has "M&M" its name?


let mmCandies=products.filter((product) => product.product.includes ("M&M"))
for(let mm of mmCandies)
{
  console.log(mm.product)
}

// Do we carry "Swedish Fish"?
let swedishFishCandies=products.filter((product) => product.product == ("Swedish Fish"))

swedishFishCandies.forEach((yes) => console.log(yes.product))