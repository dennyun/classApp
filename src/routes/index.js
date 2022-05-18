import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Login from '../pages/Login';
import Home from '../pages/Home';
import SignIn from '../pages/Signin';

export const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/signin' element={<SignIn/>} />
                <Route path='/' element={<Home/>} />
            </Routes>
        </Router>
    );
}