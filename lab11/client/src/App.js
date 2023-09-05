import './App.css';
import IndexPage from "./pages/indexpage";
import AddStudentPage from "./pages/addstudent";
import LoginPage from "./pages/login";
import ViewStudents from "./pages/viewStudents";
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />}></Route>
            <Route path="/q1" element={<AddStudentPage />} />
            <Route path="/q1/viewStudentList" element={<ViewStudents />} />
            <Route path="/q2" element={<LoginPage />} />
        </Routes>
    );
}

export default App;
