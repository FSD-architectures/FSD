import { RouterProvider, createBrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AllBrandsPageWrapper } from "@/pages/brands/all-brands-page";
import { CreateBrandPage } from "@/pages/brands/create-brand-page";
import { UpdateBrandPage } from "@/pages/brands/update-brand-page";
import { AllCategoriesPageWrapper } from "@/pages/categories/all-categories-page";
import { CreateCategoryPage } from "@/pages/categories/create-category-page";
import { UpdateCategoryPage } from "@/pages/categories/update-category-page";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="p-8">Welcome to Dashboard</div>,
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "brands",
        children: [
          {
            index: true,
            element: <AllBrandsPageWrapper />,
          },
          {
            path: "create",
            element: <CreateBrandPage />,
          },
          {
            path: "update/:brandId",
            element: <UpdateBrandPage />,
          },
        ],
      },
      {
        path: "categories",
        children: [
          {
            index: true,
            element: <AllCategoriesPageWrapper />,
          },
          {
            path: "create",
            element: <CreateCategoryPage />,
          },
          {
            path: "update/:categoryId",
            element: <UpdateCategoryPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;