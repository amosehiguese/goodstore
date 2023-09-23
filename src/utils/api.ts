import { Product } from '../shared/types';

const url = process.env.BACKEND_URL;

export const getProducts = () => {
  return fetch(`${url}/products`)
    .then((res) => {
      return res.json();
    })
    .catch(console.log);
};

export const getOrder = (id: string) => {
  return fetch(`${url}/order/${id}`)
    .then((res) => {
      return res.json();
    })
    .catch(console.log);
};
