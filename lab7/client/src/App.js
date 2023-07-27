import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Homepage from "./component/homepage";
import Q1 from "./component/q1"
import Q2 from "./component/q2";


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<Homepage/>}></Route>
            <Route path="q1" element={<Q1/>}>
                <Route path="q2" element={<Q2/>}></Route>
            </Route>
            <Route path="/q2" element={<Q2/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
