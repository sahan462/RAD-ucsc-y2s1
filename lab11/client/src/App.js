import './App.css';
import IndexPage from "./pages/indexpage";
import AddStudentPage from "./pages/addstudent";
import LoginPage from "./pages/login";
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />}>
                <Route path="/q1" element={<AddStudentPage />} />
                <Route path="/q2" element={<LoginPage />} />
            </Route>
        </Routes>
    );
}

export default App;
