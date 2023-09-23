import React from 'react';
import { Product } from '../shared/types';

type CartItemProps = {
  product: Product;
  removeFromCart: (product: Product) => void;
};

export const CartItem = ({ product, removeFromCart }: CartItemProps) => {
  return (
    <div className='cart-item'>
      <img
        src={product.image}
        style={{ imageRendering: 'pixelated' }}
        alt='goblin'
        width='64px'
        height='64px'
      />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button
        onClick={() => {
          removeFromCart(product);
        }}
        className='nes-btn is-error'
      >
        Remove
      </button>
    </div>
  );
};
