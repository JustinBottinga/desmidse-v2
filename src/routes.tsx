import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import Diensten from "@/pages/Diensten";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import AdminRedirect from "@/pages/AdminRedirect";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "over-ons", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogPost /> },
      { path: "admin", element: <AdminRedirect /> },
      { path: "admin/*", element: <AdminRedirect /> },
      { path: "diensten/:slug?", element: <Diensten /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
