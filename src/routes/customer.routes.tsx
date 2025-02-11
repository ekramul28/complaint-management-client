import CustomerDashboard from "@/page/customers/CustomerDashbord";
import { Search } from "lucide-react";

export const customerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: Search,
    element: <CustomerDashboard />,
  },
];
