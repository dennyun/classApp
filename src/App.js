import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './mock';

import Auth from './components/Auth';
import Login from './pages/Login';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Auth>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path="/login" element={<Login />} />
              <Route path='*' element={<h1>401!</h1>} />
          </Routes>
        </Auth>
        
      </BrowserRouter>
    </Provider>
  );
}

export default App;
