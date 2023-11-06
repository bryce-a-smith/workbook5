"use strict";

let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];

//use map() to return only item name
function transformFunction(element) {
    return element.item;
}
//use forEach() to display list of items
let groceryList = cart.map(transformFunction);
groceryList.forEach(item => {
    console.log(item);
});

console.log();

//use reduce() to determine total cost 
function getSum(currentTotal, element) {
    return currentTotal + (element.price * element.quantity);
}

console.log(cart.reduce(getSum, 0));

console.log();

//

let sortedGroceryList = groceryList.sort();

sortedGroceryList.forEach(item => {
    console.log(item);
});