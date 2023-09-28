import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Header } from './shared/Header';
import { Cart } from './Cart';
import { Checkout } from './Checkout';
import { OrderSummary } from './OrderSummary';

export const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route>Page not found</Route>
          <Route path='/order' element={<OrderSummary />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  );
};
