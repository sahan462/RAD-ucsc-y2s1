// //1
// let currentTime = new Date();
// let currentHour = currentTime.getHours();
//
// let greeting;
//
// if (currentHour < 10) {
//     greeting = "Good morning";
// } else if (currentHour < 20) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
//
// console.log(greeting);
//
//
// //2
//
// let fruit = "apple";
// let color;
//
// switch (fruit) {
//     case "banana":
//         color = "Yellow";
//         break;
//     case "pineapple":
//         color = "Orange";
//         break;
//     case "apple":
//         color = "Green";
//         break;
//     default:
//         color = "Unknown";
// }
//
// alert(color);

//3

// const num1 = parseInt(prompt("Enter the first number: "));
// const num2 = parseInt(prompt("Enter the second number: "));
// const num3 = parseInt(prompt("Enter the third number: "));
//
// let largest = num1;
//
// if (num2 > largest) {
//     largest = num2;
// }
//
// if (num3 > largest) {
//     largest = num3;
// }
//
// document.write("The largest number is: " + largest);

//4

// const number = parseInt(prompt("Enter a number: "));
// let isPrime = true;
//
// if (number === 1) {
//     isPrime = false;
// } else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
//
// if (isPrime) {
//     document.write(number + " is a prime number");
// } else {
//     document.write(number + " is not a prime number");
// }

// for (let i = 1; i <= 30; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// const array = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// const numbers = [80, 30, 40, 50, 23];
//
// // i. Change the element in the second index to 78.
// numbers[2] = 78;
//
// // ii. Find the length of the above array.
// const length = numbers.length;
//
// // iii. Sort the array.
// numbers.sort();
//
// console.log(numbers);
// console.log("Length of the array: " + length);


// const names = ["sadun", "kamal", "nimal", "ruwan"];
//
// // i. Convert the array to a string.
// const namesString = names.join(", ");
//
// // ii. Remove the last element from the array.
// names.pop();
//
// // iii. Add a new item called "nuwani".
// names.push("nuwani");
//
// console.log(names);
// console.log("Array as a string: " + namesString);

const numbersArray = [1, 13, 22, 123, 49];
let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}

console.log("The sum of all numbers in the array is:", sum);
