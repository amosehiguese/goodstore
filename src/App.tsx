import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Header } from './shared/Header';
import { Cart } from './Cart';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
