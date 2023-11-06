"use strict";

let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

// Who is the Academy Member whose ID is 187?
let member = academyMembers.find((arrayValue) => arrayValue.memID == 187);
if (member != undefined) {
  console.log(member.name);
} else {
  console.log("No member with that id");
}

console.log();

// Who has been in at least 3 films?
let members = academyMembers.filter((arrayValue) => arrayValue.films.length >= 3);
if (members != undefined) {
  members.forEach((member) => {
    console.log(member.name);
  });
} else {
  console.log("No member with more than 3 movies");
}

console.log();

// Who has a name that starts with "Bob"?
let bobs = academyMembers.filter((arrayValue) => arrayValue.name.substring(0, 3) == "Bob");

if (bobs != undefined) {
    bobs.forEach((bob) => {
      console.log(bob.name);
    });
  } else {
    console.log("No Bobs");
  }
  
  console.log();

// HARDER: Which Academy Members have been in a film
// that starts with "A"
let membersA = academyMembers.filter((arrayValue) => arrayValue.films.find((film) => film.substring(0, 1) == "A"));
if (membersA != undefined) {
  membersA.forEach((member) => {
    console.log(member.name);
  });
} else {
  console.log("No member with film start with A");
}

console.log();
