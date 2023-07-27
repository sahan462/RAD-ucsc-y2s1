import {Link} from "react-router-dom";

function q1(){
    return(
      <div>
          <h1>question 1</h1>
          <Link to="q2"><button>go</button></Link>
      </div>
    );
}

export default q1;