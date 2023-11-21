"use strict";

let products = [
  { prodId: 2, item: "Notepads (12 pk)", price: 12.29 },
  { prodId: 12, item: "Black Pens (12 pk)", price: 5.7 },
  { prodId: 22, item: "Stapler", price: 12.79 },
];

products.sort((productA, productB) => {
  let itemAUpper = productA.item.toUpperCase();
  let itemBUpper = productB.item.toUpperCase();

  if (itemAUpper < itemBUpper) return -1;
  else if (itemAUpper == itemBUpper) return 0;
  else return 1;
});

console.log(products);
