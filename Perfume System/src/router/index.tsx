import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/Layouts/MainLayout";
import Homepage from "../components/HomePage";
import AboutUs from "../components/AboutUs";
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
        path: "about", // ⬅️ route About Us
        element: <AboutUs />,
      },
    ],
  },
      {
    path: "/auth",
    element: <AuthPage />,
  },
]);

export default router;
