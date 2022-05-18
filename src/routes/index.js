import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Login from '../pages/Login';
import Home from '../pages/Home';

export const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/' element={<Home/>} />
            </Routes>
        </Router>
    );
}