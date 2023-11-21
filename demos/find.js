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
    Fee: "49.00",
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

// function findCourse(course) {
//     return course.CourseId == "PROG100";
// }

// const course = courses.find(findCourse);

//anonymous
// let course = courses.find(function (course) {
//   return course.CourseId == "PROG100";
// });

//arrow frunction
// let course = courses.find((course) => {
//   return course.CourseId == "PROG100";
// });

//one line arrow
//predicate function
//call back function
// let course = courses.find((course) => course.CourseId == "PROG100");

//c such that prog100 etc.
// let course = courses.find((c) => c.CourseId == "PROG100");

//don't need () around c
let course = courses.find((c) => c.CourseId == "PROG100");

console.log(course);
