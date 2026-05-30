import { useParams } from "react-router";
import { UpdateBrandForm } from "@/features/brands/update-brand/ui/update-brand-form";

export const UpdateBrandPage = () => {
    const { brandId } = useParams();
    if (!brandId) return <div>Brand not found</div>;
    
    return (
        <div className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-2xl font-bold">Update Brand</h1>
            <UpdateBrandForm brandId={brandId} />
        </div>
    );
};