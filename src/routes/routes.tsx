import { routeGenerator } from "@/utils/RouteHandler";
import { createBrowserRouter } from "react-router-dom";
import { adminPaths } from "./admin.routes";
import { customerPaths } from "./customer.routes";
import Login from "@/page/Login";
import Signup from "@/page/Register";
import AdminDashboard from "@/page/admin/AdminDashboard";
import CustomerDashboard from "@/page/customers/CustomerDashbord";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/customer",
    element: <CustomerDashboard />,
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
