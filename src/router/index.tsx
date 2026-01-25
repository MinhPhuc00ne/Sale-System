import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/Layouts/MainLayout";

import Homepage from "../components/HomePage";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Brand from "../components/Brand";
import Recruitment from "../components/Recruitment";
import Blog from "../components/Blog";
import Products from "../components/Products";
import ProductDetail from "../components/ProductDetail";

import AuthPage from "../pages/Auth/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "brand",
        element: <Brand />,
      },
      {
        path: "recruitment",
        element: <Recruitment />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product-detail", // ❗ KHÔNG có dấu /
        element: <ProductDetail />,
      },
    ],
  },

  // Auth tách riêng, không dùng MainLayout
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

export default router;
