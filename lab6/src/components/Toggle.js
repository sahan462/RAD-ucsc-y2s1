import React, {useState} from "react";

function Toggle(){

    let check = 0;
    const [toggle_value, set_toggle_value] = useState("ON");
    function toggle_function(){
        if(check === 1){
            set_toggle_value("OFF");
            check = check - 1;
        }else{
            set_toggle_value("ON");
            check = check + 1;
        }
    }


    return(
        <div>
        <h1>Toggle</h1>
            <div className="Toggle">
                <button onClick={toggle_function}>{toggle_value}</button>
            </div>
        </div>
    )
}


export default Toggle;