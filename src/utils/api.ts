import { Product } from '../shared/types';

const url = 'http://localhost:4000';

export const getProducts = () => {
  return fetch(`${url}/products`)
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const getOrder = (id: string) => {
  return fetch(`${url}/order/${id}`)
    .then((res) => {
      return res.json();
    })
    .catch(console.log);
};
