import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../api/update-product";
import { productQueryKeys } from "@/entities/products";

export const useUpdateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateProduct,
        onSuccess: (updatedProduct) => {
            queryClient.invalidateQueries({ queryKey: productQueryKeys.all });
            queryClient.invalidateQueries({
                queryKey: productQueryKeys.detail(updatedProduct.id),
            });
        },
    });
};