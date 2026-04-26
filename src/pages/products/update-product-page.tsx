import { useQuery } from "@tanstack/react-query";
import { getProductById, productQueryKeys } from "@/entities/products";
import { UpdateProductForm } from "@/features/products/update-product";

type UpdateProductPageProps = {
    productId: string;
};

export const UpdateProductPage = ({ productId }: UpdateProductPageProps) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: productQueryKeys.detail(productId),
        queryFn: () => getProductById(productId),
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError || !data) return <p>Product not found</p>;

    return (
        <div className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-2xl font-bold">Update Product</h1>
            <UpdateProductForm product={data} />
        </div>
    );
};