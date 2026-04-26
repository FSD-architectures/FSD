import { z } from "zod";

export const updateProductSchema = z.object({
  title: z.string().min(2, "Title is required"),
  description: z.string().min(5, "Description is required"),
  price: z.coerce.number().min(1, "Price must be greater than 0"),
  imageUrl: z.string().url("Invalid image url"),
  stock: z.coerce.number().min(0, "Stock cannot be negative"),
});

export type UpdateProductFormValues = z.infer<typeof updateProductSchema>;