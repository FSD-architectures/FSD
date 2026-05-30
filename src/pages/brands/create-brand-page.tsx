import { CreateBrandForm } from "@/features/brands/create-brand/ui/create-brand-form";

export const CreateBrandPage = () => {
    return (
        <div className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-2xl font-bold">Create Brand</h1>
            <CreateBrandForm />
        </div>
    );
};