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

// When does the PROG200 course start?
function getCourse(object, courseId) {
  if (object.CourseId == courseId) {
    return true;
  } else {
    return false;
  }
}

// What is the title of the PROJ500 course?
function getCourse1(object) {
  if (object.CourseId == "PROJ500") {
    return true;
  } else {
    return false;
  }
}

// What are the titles of the courses that cost $50 or less?
function getCourses1(object) {
  if (object.Fee <= 50) {
    return true;
  } else {
    return false;
  }
}

// What classes meet in "Classroom 1"?
function getClasses(object) {
  if (object.Location == "Classroom 1") {
    return true;
  } else {
    return false;
  }
}

// When does the PROG200 course start?
let courseId = "PROG200";
// let course = courses.find((course) => getCourse(course, courseId));
let course = courses.find(function (course) {
  return getCourse(course, courseId);
});

if (course != undefined) {
  console.log(course.StartDate);
}

console.log("---");

// What is the title of the PROJ500 course?
let course1 = courses.find(getCourse1);

if (course != undefined) {
  console.log(course1.Title);
}

console.log();

// What are the titles of the courses that cost $50 or less?
let courses1 = courses.filter(getCourses1);

if (courses1 != undefined) {
  for (const course of courses1) {
    console.log(course.Title);
  }
}

console.log();

// What classes meet in "Classroom 1"?
let classes = courses.filter(getClasses);

if (classes != undefined) {
  for (const class1 of classes) {
    console.log(class1.Title);
  }
}
