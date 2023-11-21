"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

console.log("When does the PROG200 course start?");
const course1 = courses.find(c => c.CourseId == "PROG200");
console.log(course1.StartDate);

console.log();

console.log("What is the title of the PROJ500 course?");
const course2 = courses.find(c => c.CourseId == "PROJ500");
console.log(course2.Title);

console.log();

console.log("What are the titles of the courses that cost $50 or less?");
const courseList3 = courses.filter(c => c.Fee <= 50);
courseList3.forEach(course => {
    console.log(course.Title);
});

console.log();

console.log('What classes meet in "Classroom 1"?');
const courseList4 = courses.filter(c => c.Location == "Classroom 1");
courseList4.forEach(course => {
    console.log(course.Title);
});
