import { useParams } from "react-router";

export const UpdateBrandPage = () => {
    const { brandId } = useParams();
    if (!brandId) return <div>Brand not found</div>;
    
    return (
        <div className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-2xl font-bold">Update Brand</h1>
            <p className="text-muted-foreground">
                Update brand feature is not implemented yet for brand {brandId}.
            </p>
        </div>
    );
};
