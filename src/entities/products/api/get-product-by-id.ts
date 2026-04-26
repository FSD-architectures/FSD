import axios from "axios";

import type { Product } from "../model/types";

export const getProductById = async (id: string): Promise<Product> => {
  const response = await axios.get(`/products/${id}`);
  return response.data;
};