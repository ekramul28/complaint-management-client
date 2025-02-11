import CustomerDashboard from "@/page/customers/CustomerDashbord";
import Login from "@/page/login";
import { Search, Ticket } from "lucide-react";

export const customerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: Search,
    element: <CustomerDashboard />,
  },
  {
    title: "tickets",
    url: "tickets",
    icon: Ticket,
    element: <Login />,
  },
  {
    title: "tickets",
    url: "tickets/:id",
    icon: Ticket,
    element: <Login />,
  },
];
