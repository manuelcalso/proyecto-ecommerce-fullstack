import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cart from "./components/Cart.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Mainproducts from "./components/Mainproducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Mainproducts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/features",
    element: "",
    errorElement: <ErrorPage />,
  },
  {
    path: "/marketplace",
    element: "",
    errorElement: <ErrorPage />,
  },
  {
    path: "/company",
    element: "",
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: "",
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
