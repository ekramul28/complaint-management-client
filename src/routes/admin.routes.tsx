import AdminDashboard from "@/page/admin/AdminDashboard";
import Login from "@/page/login";
import { Search } from "lucide-react";

export const adminPaths = [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: Search,
    element: <AdminDashboard />,
  },
  {
    title: "login",
    url: "login",
    icon: Search,
    element: <Login />,
  },
];
