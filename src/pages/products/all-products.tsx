import { useQuery } from "@tanstack/react-query";
import { getProducts, productQueryKeys, ProductCard, type Product } from "@/entities/products";

export const AllProductsPage = () => {
  const { data, isLoading, isError } = useQuery<Product[]>({
    queryKey: productQueryKeys.lists(),
    queryFn: getProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {data?.map((product) => (
        <div key={product.id} className="space-y-3">
          <ProductCard product={product} />
          {/* <DeleteProductButton productId={product.id} /> */}
        </div>
      ))}
    </div>
  );
};