import axios from "axios";

import type { Product } from "../model/types";

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/products");
  return response.data;
};