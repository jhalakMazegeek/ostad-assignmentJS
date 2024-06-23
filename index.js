/* 1) Write a function named ‘calculateSum’ that takes two arguments 
and returns their sum. */
function calculateSum(a, b) {
    return a + b;
}

/* 2) Write a function named ‘isEven’ that takes one argument 
and returns true if the number is even, and false otherwise. */
function isEven(number) {
    return number % 2 === 0;
}

/* 3) Write a function named ‘findMax’ that takes an array 
of numbers and returns the largest number in the array. */
function findMax(numbers) {
    return Math.max(...numbers);
}

/* 4) Write a function named ‘reverseString’ that takes 
a string and returns the string reversed. */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/* 5) Write a function named ‘filterOddNumbers’ that takes an array of 
numbers and returns a new array containing only the odd numbers. */
function filterOddNumbers(numbers) {
    return numbers.filter((number) => number % 2 !== 0);
}

/* 6) Write a function named ‘sumArray’ that takes an 
array of numbers and returns the sum of all elements. */
function sumArray(numbers) {
    return numbers.reduce((sum, current) => sum + current, 0);
}

/* 7) Write a function named ‘sortArray’ that takes an array of numbers 
and returns a new array sorted in ascending order. */
function sortArray(numbers) {
    return [...numbers].sort((a, b) => a - b);
}

/* 8) Write a function named ‘capitalizeFirstLetter’ that takes a string 
and returns the same string with the first letter capitalized. */
function capitalizeFirstLetter(str) {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1);
}

// Lets Test these functions
console.log(calculateSum(3, 5));
console.log(isEven(4));
console.log(findMax([1, 2, 3, 4, 5]));
console.log(reverseString("hello"));
console.log(filterOddNumbers([1, 2, 3, 4, 5]));
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sortArray([5, 3, 8, 1, 2]));
console.log(capitalizeFirstLetter("hello"));