import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Indexpage from "./components/indexpage";
import Toggle from "./components/Toggle";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";
import CardList from "./components/CardList";
import Form from "./components/Form";
function App() {

    const list = [
        'Learn React',
        'Build a project',
        'Go for a walk',
        'Do some exercises',
        'Join a music class',
        'Read a novel',
    ];

    const card = [
        {title: 'Card 1',content: 'This is the content of Card 1'},
        {title: 'Card 2',content: 'This is the content of Card 2'},
        {title: 'Card 3',content: 'This is the content of Card 3'}
    ]

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Indexpage/>}></Route>
              <Route path="/Toggle" element={<Toggle />} ></Route>
              <Route path="/Timer" element={<Timer />} ></Route>
              <Route path="/TodoList" element={<TodoList list={list} />} ></Route>
              <Route path="/CardList" element={<CardList cards={card} />} ></Route>
              <Route path="/Form" element={<Form />} ></Route>

          </Routes>
      </BrowserRouter>
  );
}

export default App;
