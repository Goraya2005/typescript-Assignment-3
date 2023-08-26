"use strict";
//  - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
let sum = 0;
for (let index = 0; index <= 10; index++) {
    if (index % 2 == 0) {
        sum = sum + index;
    }
}
console.log(sum);
//  - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let array11 = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < array11.length; index++) {
    if (array11[index] % 2 == 0) {
        console.log(array11[index]);
    }
}
//  - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let array = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 != 0) {
        console.log(array[index]);
    }
}
//  - Write a program that defines a function to calculate the area of a circle. The function should take t
// he radius as input and return the calculated area.
function areaOfCircle(radius) {
    let area = 2 * 3.14 * radius;
    return area;
}
var areaCircle = 20;
let totalArea = areaOfCircle(areaCircle);
console.log(totalArea);
//  - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
let arrayOfGrades = [68, 44, 34, 95, 100];
let index = 0;
for (let index = arrayOfGrades.length - 1; index >= 0; index--) {
    if (arrayOfGrades[index] < 50) {
        arrayOfGrades.splice(index, 1);
        console.log(arrayOfGrades);
    }
}
//  - Write a program that uses a function to find the largest element in an array of numbers.
let numArray = [2, 3, 4, 5, 6, 7, 8, 6, 5, 4, 3, 4, 5, 6, 7, 6, 7, 8, 9, 77, 6, 5, 5, 44, 45];
let max = Math.max(...numArray);
console.log(max);
