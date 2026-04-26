import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productQueryKeys } from "@/entities/products";

import { createProduct } from "../api/create-product";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: productQueryKeys.all });
    },
  });
};