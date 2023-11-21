"use strict";

let products = [
  { prodId: 2, name: "Notepads (12 pk)", price: 12.29 },
  { prodId: 12, name: "Black Pens (12 pk)", price: 5.7 },
  { prodId: 22, name: "Stapler", price: 12.79 },
];

products.sort((a, b) => {
  a = a.name.toUpperCase();
  b = b.name.toUpperCase();

  if (a < b) return -1;
  else if (a == b) return 0;
  else return 1;
});

console.log(products);

console.log("-------\n");

products.sort((a, b) => {
    if (a.price > b.price) return -1;
    else if (a.price == b.price) return 0;
    else return 1;
  });
  
  console.log(products);
  
