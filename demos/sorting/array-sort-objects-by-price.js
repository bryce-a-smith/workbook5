"use strict";

let products = [
  { prodId: 2, item: "Notepads (12 pk)", price: 12.29 },
  { prodId: 12, item: "Black Pens (12 pk)", price: 5.7 },
  { prodId: 22, item: "Stapler", price: 12.79 },
];

products.sort((productA, productB) => productA.price - productB.price);

console.log(products);