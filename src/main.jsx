import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { rootRouter } from "./Router/Router.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={rootRouter} />
  // </StrictMode>
);
