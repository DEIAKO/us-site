import Home from '../pages/Home';
import About from '../pages/About';
import Layout from '../components/Layout';

import {
  createBrowserRouter,
} from "react-router-dom";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ]
  
    },
  ]);


export default router