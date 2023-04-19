import { createBrowserRouter } from "react-router-dom";
import Special from "./pages/Special";
import Main from "./pages/Main";
import Desserts from "./pages/Desserts";
import Beverages from "./pages/Beverages";
import Store from "./pages/Store";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Special />,
  },
  {
    path: "/special",
    element: <Special />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/desserts",
    element: <Desserts />,
  },
  {
    path: "/beverages",
    element: <Beverages />,
  },
  {
    path: "/store",
    element: <Store />
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default router;
