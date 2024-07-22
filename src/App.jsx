import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import Home from "./routes/home";
import ErrorPage from "./error-page";
import Buttons from "./routes/buttons";
import Carousels from "./routes/carousels";
import Headers from "./routes/headers";

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
        ],
      },
      {
        path: "/buttons",
        element: <Buttons />,
      },
    ]);
    
    return (
      <RouterProvider router={router} />
    )
}
