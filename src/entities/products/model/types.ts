export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
  createdAt?: string;
  updatedAt?: string;
};

export type ProductPayload = {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
};