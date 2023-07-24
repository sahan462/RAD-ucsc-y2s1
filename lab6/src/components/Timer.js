import React, {useState} from "react";

function Timer(){

    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState("null");
    function addsec(){
        let prev_time = 0
        setTimer(setInterval(()=>{
            setTime(prev_time);
            prev_time = prev_time + 1;
        },1000))
    }

    function stoptimer(){
        clearInterval(timer);
    }


    return(
        <div>
            <h1>Timer</h1>
            <div className="Timer">
                <button onClick={addsec}>Start</button>
                <button onClick={stoptimer}>Stop</button>
            </div>
            <div className="display">
                <h1>{time}</h1>
            </div>
        </div>
    )
}


export default Timer;