export const productQueryKeys = {
  all: ["products"] as const,
  lists: () => [...productQueryKeys.all, "list"] as const,
  detail: (id: string) => [...productQueryKeys.all, "detail", id] as const,
};