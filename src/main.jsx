import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import Buttons from "./routes/buttons";
import Carousels from "./routes/carousels";
import Headers from "./routes/headers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/contact",
        element: <h1 className="flex justify-center items-center h-svh">Contact</h1>
      }
    ]
  },
  {
    path: "/buttons",
    element: <Buttons />
  },
  {
    path: "/carousels",
    element: <Carousels />
  },
  {
    path: '/headers',
    element: <Headers />
  },
  {
    path: "/*",
    element: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);