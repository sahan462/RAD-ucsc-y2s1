import './App.css';
import IndexPage from "./pages/indexpage";
import AddStudentPage from "./pages/addstudent";
import LoginPage from "./pages/login";
import ViewStudents from "./pages/viewStudents";
import Signup from "./pages/signup";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />}></Route>
            <Route path="/q1" element={<AddStudentPage />} />
            <Route path="/q1/viewStudentList" element={<ViewStudents />} />
            <Route path="/q2" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}

export default App;
