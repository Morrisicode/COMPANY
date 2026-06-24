import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Team from "../pages/Team";

const router = createBrowserRouter([
  {
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/team",
        element: <Team />,
      },
    ],
  },
]);

export default router;
