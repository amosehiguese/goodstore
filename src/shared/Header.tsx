import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='nav-brand'>
          <Link to='/'>Goblin Store</Link>
          <p>Everything for your Typescript adventure</p>
        </div>
        <div className='cart'>
          <CartWidget />
        </div>
      </div>
    </header>
  );
};
