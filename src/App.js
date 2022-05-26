import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import GuestRoute from './routes/GuestRoute'

import Auth from './components/Auth';
import Login from './pages/Login'
import Home from './pages/Home';
import store from './store';

import './mock';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Auth>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="//*" element={<Home />} />
          </Routes>
        </Auth>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

