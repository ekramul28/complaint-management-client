import App from "@/App";
import { routeGenerator } from "@/utils/RouteHandler";
import { createBrowserRouter } from "react-router-dom";
import { adminPaths } from "./admin.routes";
import { customerPaths } from "./customer.routes";
import Login from "@/page/login";
import Signup from "@/page/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/customer",
    element: <App />,
    children: routeGenerator(customerPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
]);

export default router;
