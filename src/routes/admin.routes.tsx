import AdminDashboard from "@/page/admin/AdminDashboard";
import Login from "@/page/login";
import { Search, Ticket, User } from "lucide-react";

export const adminPaths = [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: Search,
    element: <AdminDashboard />,
  },
  {
    title: "tickets",
    url: "tickets",
    icon: Ticket,
    element: <Login />,
  },
  {
    title: "manage-users",
    url: "manage-users",
    icon: User,
    element: <Login />,
  },
];
