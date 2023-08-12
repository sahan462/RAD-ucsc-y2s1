import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Homepage from "./component/homepage";
import axios from "axios";

import Q1 from "./component/q1"
import Q2 from "./component/q2";
import Q3 from "./component/q3";
import Q4 from "./component/q4";
import Q5 from "./component/q5";
import Q6 from "./component/q6";
import Q7 from "./component/q7";
import Q8 from "./component/q8";

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<Homepage/>}></Route>
            <Route path="q1" element={<Q1/>}></Route>
            <Route path="q2" element={<Q2/>}></Route>
            <Route path="q3" element={<Q3/>}></Route>
            <Route path="q4" element={<Q4/>}></Route>
            <Route path="q5" element={<Q5/>}></Route>
            <Route path="q6" element={<Q6/>}></Route>
            <Route path="q7" element={<Q7/>}></Route>
            <Route path="q8" element={<Q8/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
