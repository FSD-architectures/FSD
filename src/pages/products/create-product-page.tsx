import { CreateProductForm } from "@/features/products/create-product";

export const CreateProductPage = () => {
    return (
        <div className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-2xl font-bold">Create Product</h1>
            <CreateProductForm />
        </div>
    );
};