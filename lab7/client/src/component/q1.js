import React, { useState } from "react";
import axios from "axios";

const Q1 = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [total, setTotal] = useState("");

    const handleQ1 = async (ev) => {
        ev.preventDefault();
        try {
            const response = await axios.post("/q1", {num1, num2});
            const responseData = response.data;
            setTotal(responseData.Total);
            alert("Successful");
        } catch (err) {
            console.log("Error:", err);
        }
    };

    return (
        <div>
            <h1>Question 1</h1>
            <form onSubmit={handleQ1}>
                <div id="console">
                    <label>
                        Enter Number 1:
                        <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} />
                    </label>
                    <label>
                        Enter Number 2:
                        <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} />
                    </label>
                </div>
                <button className="senddata" type="submit">Submit</button>
            </form>
            <div id="result">
                Total: {total} {/* Display the total value */}
            </div>
        </div>
    );
};

export default Q1;
