import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Layout from "../Pages/Layout";
import About from "../Pages/About";
import Carts from "../Pages/Carts";
import ProductDetails from "../Pages/ProductDetails";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
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
