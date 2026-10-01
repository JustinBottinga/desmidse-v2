import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import Diensten from "@/pages/Diensten";
import Contact from "@/pages/Contact";
import AdminRedirect from "@/pages/AdminRedirect";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "over-mij", element: <About /> },
      { path: "over-ons", element: <Navigate to="/over-mij" replace /> },
      // { path: "blog", element: <Blog /> },
      // { path: "blog/:slug", element: <BlogPost /> },
      { path: "admin", element: <AdminRedirect /> },
      { path: "admin/*", element: <AdminRedirect /> },
      { path: "diensten/:slug?", element: <Diensten /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
