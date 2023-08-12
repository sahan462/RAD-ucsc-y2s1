const fs = require("fs");
const axios = require("axios");
const csv = require("csv-parser");


//Task 1: Sum of two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

const number1 = 5;
const number2 = 7;
const sum = addNumbers(number1, number2);
console.log(`The sum of ${number1} and ${number2} is ${sum}`);


//Task 2: Calculate square values
const numbers_1 = [1, 2, 3, 4, 5];

numbers_1.forEach((number) => {
    const square = number * number;
    console.log(`The square of ${number} is ${square}`);
});


// Task 3: Find the maximum number in an array
const numbers_2 = [5, 12, 8, 21, 3];
const maxNumber = Math.max(...numbers_2);
console.log("Maximum number:", maxNumber);

// Task 4: Calculate the factorial of a positive integer
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
const inputNumber = 5;
const result = factorial(inputNumber);
console.log(`Factorial of ${inputNumber} is ${result}`);

// Task 5: Read and display "name" and "age" properties from a JSON file
fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    const jsonData = JSON.parse(data);
    console.log("Name:", jsonData.name);
    console.log("Age:", jsonData.age);
});

// Task 6: Reverse a string and print it to the console
const inputString = "Hello, World!";
const reversedString = inputString.split("").reverse().join("");
console.log("Reversed string:", reversedString);



// Task 7: Read and display CSV file content using the csv-parser package
fs.createReadStream("./data.csv")
    .pipe(csv())
    .on("data", (row) => {
        console.log("Row:", row);
    })
    .on("end", () => {
        console.log("CSV file reading complete");
    });



// Task 8: Fetch data from an API and display the response
axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        console.log("API Response:", response.data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
