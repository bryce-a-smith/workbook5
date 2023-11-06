"use strict";

let person = { name: "Pursalane", age: 11, gender: "Female" };

for (let key in person) {
  console.log(key + " = " + person[key]);
}

console.log();

//////////////////////////

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

menu.forEach((meal) => {
  meal.forEach((option) => {
    for (const key in option) {
      console.log(key + " = " + option[key]);
    }
    console.log();
  });
});
