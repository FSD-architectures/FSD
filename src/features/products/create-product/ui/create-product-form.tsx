import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
    createProductSchema,
    type CreateProductFormInput,
    type CreateProductFormValues,
} from "../model/create-product-schema";
import { useCreateProduct } from "../model/use-create-product";

export const CreateProductForm = () => {
    const { mutate, isPending } = useCreateProduct();

    const form = useForm<CreateProductFormInput, unknown, CreateProductFormValues>({
        resolver: zodResolver(createProductSchema),
        defaultValues: {
            title: "",
            description: "",
            price: 0,
            imageUrl: "",
            stock: 0,
        },
    });

    const onSubmit = (values: CreateProductFormValues) => {
        mutate(values, {
            onSuccess: () => {
                form.reset();
            },
        });
    };

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 rounded-2xl border p-5"
        >
            <input
                placeholder="Title"
                className="w-full rounded-xl border p-3"
                {...form.register("title")}
            />
            <p className="text-sm text-red-500">{form.formState.errors.title?.message}</p>

            <textarea
                placeholder="Description"
                className="w-full rounded-xl border p-3"
                {...form.register("description")}
            />
            <p className="text-sm text-red-500">
                {form.formState.errors.description?.message}
            </p>

            <input
                type="number"
                placeholder="Price"
                className="w-full rounded-xl border p-3"
                {...form.register("price")}
            />
            <p className="text-sm text-red-500">{form.formState.errors.price?.message}</p>

            <input
                placeholder="Image URL"
                className="w-full rounded-xl border p-3"
                {...form.register("imageUrl")}
            />
            <p className="text-sm text-red-500">
                {form.formState.errors.imageUrl?.message}
            </p>

            <input
                type="number"
                placeholder="Stock"
                className="w-full rounded-xl border p-3"
                {...form.register("stock")}
            />
            <p className="text-sm text-red-500">{form.formState.errors.stock?.message}</p>

            <button
                type="submit"
                disabled={isPending}
                className="rounded-xl bg-black px-4 py-2 text-white disabled:opacity-50"
            >
                {isPending ? "Creating..." : "Create Product"}
            </button>
        </form>
    );
};
