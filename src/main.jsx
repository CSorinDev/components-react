import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import Buttons from "./routes/buttons";
import Carousels from "./routes/carousels";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/buttons",
    element: <Buttons />
  },
  {
    path: "/carousels",
    element: <Carousels />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);