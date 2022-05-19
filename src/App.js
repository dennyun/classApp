import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './mock';

import Login from './pages/Login';
import Home from './pages/Home';
import GuestRoute from './routes/GuestRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='*' element={<h1>401!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
