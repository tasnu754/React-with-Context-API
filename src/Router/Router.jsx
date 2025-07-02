import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Layout from "../Pages/Layout";
import About from "../Pages/About";
import Carts from "../Pages/Carts";
import ProductDetails from "../Pages/ProductDetails";
import NotFoundPage from "../Pages/NotFoundPage";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "carts",
        element: <Carts></Carts>,
      },
      {
        path: "product/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);
