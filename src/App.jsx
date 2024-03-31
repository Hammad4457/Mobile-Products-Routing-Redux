import { useState } from "react";
import Products from "./components/fetchProducts";
import Details from "./components/Details";
import ErrorPage from "./components/ErrorPage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Products />, errorElement: <ErrorPage /> },
  {
    path: "/details/:productId",
    element: <Details />,
    errorElement: <ErrorPage />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
