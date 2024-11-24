import AuthLayout from "@/layout/AuthLayout";
import Layout from "@/layout/Layout";
import Login from "@/page/Auth/Login";
import Register from "@/page/Auth/Register";
import LandingPage from "@/page/screen/LandingPage";
import { createBrowserRouter } from "react-router-dom";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { element: <Register />, path: "/register" },
      {
        element: <Login />,
      },
    ],
  },
]);
