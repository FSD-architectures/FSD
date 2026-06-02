import { useParams } from "react-router";

export const UpdateCategoryPage = () => {
    const { categoryId } = useParams();
    if (!categoryId) return <div>Category not found</div>;
    
    return (
        <div className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-2xl font-bold">Update Category</h1>
            <p className="text-muted-foreground">
                Update category feature is not implemented yet for category {categoryId}.
            </p>
        </div>
    );
};
