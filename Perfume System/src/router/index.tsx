import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/Layouts/MainLayout";
import Homepage from "../components/HomePage";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import AuthPage from "../pages/Auth/AuthPage";
import Brand from "../components/Brand";
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

    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

export default router;
