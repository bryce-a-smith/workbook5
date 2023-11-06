"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Milk Duds", price: 1.79 },
  { product: "Skittles", price: 2.5 },
  { product: "Licorice", price: 5.89 },
  { product: "Fruit Snacks", price: 1.79 },
  { product: "Kit Kat", price: 2.89 },
  { product: "Sour Patch Kids", price: 5.79 },
];

// Which candies costs less than $4.00?
let cheapOptions = products.filter((arrayValue) => arrayValue.price < 4);
if (cheapOptions != undefined) {
  cheapOptions.forEach((option) => {
    console.log(option.product + " $" + option.price.toFixed(2));
  });
} else {
  console.log("No options under $4");
}

console.log();

// Which candies has "M&M" its name?
let mmOptions = products.filter((arrayValue) => arrayValue.product.includes("M&M"));
if (mmOptions != undefined) {
  mmOptions.forEach((option) => {
    console.log(option.product);
  });
} else {
  console.log("No M&M options");
}

console.log();

// Do we carry "Swedish Fish"?
let fish = products.find((arrayValue) => arrayValue.product == "Swedish Fish");
if (fish) {
  console.log("Yes Swedish Fish");
} else {
  console.log("No Swedish Fish");
}
