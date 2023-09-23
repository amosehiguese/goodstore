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

export type CheckoutPayload = {
  products: Product[];
};

export const submitCheckout = (data: CheckoutPayload) => {
  return fetch(`${url}/checkout`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch(console.log);
};
