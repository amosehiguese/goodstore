import React from 'react';
import { Product } from '../shared/types';

interface CartContextValue {
  addToCart: (product: Product) => void;
  totalPrice: () => number;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
  products: Product[];
}

const saveProducts = (products: Product[]) => {
  localStorage.setItem('products', JSON.stringify(products));
};

const CartContext = React.createContext({} as CartContextValue);

export const CartProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [products, setProducts] = React.useState<Product[]>([]);

  const totalPrice = () => {
    return products.reduce((total: number, product) => {
      return total + Number(product.price);
    }, 0);
  };

  const addToCart = (newProduct: Product) => {
    if (products.find((product) => newProduct.name === product.name)) {
      return;
    }
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    saveProducts(newProducts);
  };

  const removeFromCart = (product: Product) => {
    const newProducts = products.filter((p) => {
      return p.name !== product.name;
    });
    setProducts(newProducts);
    saveProducts(newProducts);
  };

  const clearCart = () => {
    setProducts([]);
    saveProducts([]);
  };

  React.useEffect(() => {
    try {
      const storedProducts = localStorage.getItem('products');
      const parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];
      setProducts(parsedProducts);
    } catch (error) {}
  }, []);

  return (
    <CartContext.Provider
      value={{ addToCart, removeFromCart, clearCart, products, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => React.useContext(CartContext);
