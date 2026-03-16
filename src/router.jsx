import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/layout.jsx";

import Home from "./pages/home.jsx";
import Shop from "./pages/Shop";
import PlantCare from "./pages/PlantCare";
import Blogs from "./pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/plant-care",
        element: <PlantCare />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);