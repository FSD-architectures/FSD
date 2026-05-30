import { useParams } from "react-router";
import { UpdateCategoryForm } from "@/features/categories/update-category/ui/update-category-form";

export const UpdateCategoryPage = () => {
    const { categoryId } = useParams();
    if (!categoryId) return <div>Category not found</div>;
    
    return (
        <div className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-2xl font-bold">Update Category</h1>
            <UpdateCategoryForm categoryId={categoryId} />
        </div>
    );
};