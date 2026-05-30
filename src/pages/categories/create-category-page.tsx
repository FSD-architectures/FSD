import { CreateCategoryForm } from "@/features/categories/create-category/ui/create-category-form";

export const CreateCategoryPage = () => {
    return (
        <div className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-2xl font-bold">Create Category</h1>
            <CreateCategoryForm />
        </div>
    );
};