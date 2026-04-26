import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Product } from "@/entities/products";
import {
    updateProductSchema,
    type UpdateProductFormValues,
} from "../model/update-product.schema";
import { useUpdateProduct } from "../model/use-update-product";

type UpdateProductFormProps = {
    product: Product;
};

export const UpdateProductForm = ({ product }: UpdateProductFormProps) => {
    const { mutate, isPending } = useUpdateProduct();

    const form = useForm<UpdateProductFormValues>({
        resolver: zodResolver(updateProductSchema),
        defaultValues: {
            title: product.title,
            description: product.description,
            price: product.price,
            imageUrl: product.imageUrl,
            stock: product.stock,
        },
    });

    const onSubmit = (values: UpdateProductFormValues) => {
        mutate({
            id: product.id,
            payload: values,
        });
    };

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 rounded-2xl border p-5"
        >
            <input className="w-full rounded-xl border p-3" {...form.register("title")} />
            <textarea
                className="w-full rounded-xl border p-3"
                {...form.register("description")}
            />
            <input
                type="number"
                className="w-full rounded-xl border p-3"
                {...form.register("price")}
            />
            <input
                className="w-full rounded-xl border p-3"
                {...form.register("imageUrl")}
            />
            <input
                type="number"
                className="w-full rounded-xl border p-3"
                {...form.register("stock")}
            />

            <button
                type="submit"
                disabled={isPending}
                className="rounded-xl bg-black px-4 py-2 text-white disabled:opacity-50"
            >
                {isPending ? "Updating..." : "Update Product"}
            </button>
        </form>
    );
};