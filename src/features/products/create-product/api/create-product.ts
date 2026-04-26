import type { Product, ProductPayload } from "@/entities/products";
import axios from "axios";

export const createProduct = async (payload: ProductPayload): Promise<Product> => {
  const response = await axios.post("/products", payload);
  return response.data;
};