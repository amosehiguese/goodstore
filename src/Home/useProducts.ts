import React from 'react';
import { getProducts } from '../utils/api';

export const useProducts = () => {
  const [categories, setCategories] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setCategories(data.categories || []);
      } catch (e) {
        console.error(e);
        setError(true);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  return { categories, isLoading, error };
};
