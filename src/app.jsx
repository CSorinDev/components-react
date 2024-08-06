import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./routes/home";
import ErrorPage from "./error-page";
import Buttons from "./routes/buttons";
import Carousels from "./routes/carousels";
import Headers from "./routes/headers";
import Test from "./routes/test";
import Loaders from "./routes/loaders";
import Forms from "./routes/forms";

export default function App() {
    const router = createBrowserRouter([
      { 
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
          children: [
            {
              path: "buttons",
              element: <Buttons />,
            },
            {
              path: "carousels",
              element: <Carousels />,
            },
            {
              path: "headers",
              element: <Headers />,
            },
            {
              path: "test",
              element: <Test />
            },
            {
              path: "loaders",
              element: <Loaders />
            },
            {
              path: "forms",
              element: <Forms />,
            }
          ],
      },
      {
        path: "*",
        element: <Home />
      }
    ]);
    
    return (
      <RouterProvider router={router} />
    )
}