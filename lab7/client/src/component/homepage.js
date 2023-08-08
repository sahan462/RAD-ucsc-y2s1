import {Link} from "react-router-dom";

function indexpage(){
    return(
        <div className="home">
            <h1>Lab 7</h1>
            <ol>
                <li>
                    <div className="q1">
                        <Link to="q1"><p> Create a Node.js function that takes two numbers as input and returns their sum.</p></Link>
                    </div>
                </li>
                <li>
                    <div className="q2">
                        <Link to="q2"><p>Create an array of numbers in Node.js and print the square of each number.</p></Link>
                    </div>
                </li>
                <li>
                    <div className="q3">
                        <Link to="q3"><p> Create an array of numbers in Node.js and find the maximum number in the array.
                            Hint: Use the Math.max() function to find the maximum number in an array.</p></Link>
                    </div>
                </li>
                <li>
                    <div className="q4">
                        <Link to="q4"><p> Create a Node.js function named factorial that takes a positive integer as input and
                            returns its factorial.
                            Hint: Consider using recursion to calculate the factorial of a number.</p></Link>
                    </div>
                </li>
                <li>
                    <div className="q5">
                        <Link to="q5"><p>Create a Node.js script that reads a JSON file named data.json, parses its content, and
                            displays the values of the "name" and "age" properties.
                            Hint: Use the fs module to read the JSON file, then parse its content using JSON.parse()
                            to access and display the "name" and "age" properties.</p></Link>
                    </div>
                </li>
                <li>
                    <div className="q6">
                        <Link to="q6"><p>Create a Node.js program that takes a string as input and prints its reverse to the console.
                            Hint: Use the split(), reverse(), and join() methods to reverse the input string.</p></Link>
                    </div>
                </li>
                <li>
                    <div className="q7">
                        <Link to="q7"><p>Write a Node.js program that reads a CSV file named "data.csv" and displays its
                            content in a tabular format.
                            Hint: You need to install the csv-parser package using npm (e.g. npm install
                            csv-parser).</p></Link>
                    </div>
                </li>
                <li>
                    <div className="q8">
                        <Link to="q8"><p>Write a Node.js program that fetches data from an API (e.g.
                            https://jsonplaceholder.typicode.com/posts) and displays the response to the console.
                            Hint: You need to install the axios package using npm (e.g. npm install axios).</p></Link>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default indexpage;

