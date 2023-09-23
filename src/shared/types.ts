export type Product = {
  name: string;
  price: number;
  image: string;
};

export type Category = {
  name: string;
  items: Product[];
};
