const course = {
    name: 'Advanced JavaScript',
    numberOfStudents: 6
}
console.log(course);

// Print the course name and the number of students
console.log(`The course name is: ${course.name}, and it has ${course.numberOfStudents} students.`);

// Update the number of students to 10
course.numberOfStudents = 10;
console.log(course);

// Check if the course has the key 'name'
console.log(course.hasOwnProperty('name'));

// Write a function that will return all keys in an object
function getKeys(obj) {
    return Object.keys(obj);
}
console.log(getKeys(course));

// Write a function that will return all key values in an object
function getValues(obj) {
    return Object.values(obj);
}
console.log(getValues(course));
