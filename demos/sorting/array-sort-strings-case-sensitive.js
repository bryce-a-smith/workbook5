"use strict";

let cars = ["Saab", "Volvo", "BMW", "subaru", "Audi", "Porsche", "plymouth"];
cars.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a < b) return -1;
  else if (a == b) return 0;
  else return 1;
});
cars.forEach((car) => console.log(car));
