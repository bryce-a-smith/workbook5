"use strict";

let menu = [
  [
    { item: "Sausage and Egg Biscuit", price: 3.69 },
    { item: "Bacon and Egg Biscuit", price: 3.49 },
    { item: "Ham and Egg Biscuit", price: 3.29 },
  ],
  [
    { item: "Sandwich", price: 5 },
    { item: "Soup", price: 3 },
    { item: "Salad", price: 5 },
    { item: "Mac n' Cheese", price: 5 },
  ],
  [
    { item: "Lasagna", price: 10 },
    { item: "Steak", price: 20 },
    { item: "Burrito", price: 8 },
    { item: "Chicken", price: 15 },
    { item: "Fish", price: 12 },
  ],
];

let meal = 1;

console.log("Lunch Menu");

menu[meal].forEach(option => {
    console.log(option.item, option.price);
});
