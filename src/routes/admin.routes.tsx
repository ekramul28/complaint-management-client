import AdminDashboard from "@/page/admin/AdminDashboard";
import ManageTickets from "@/page/admin/ManageTickets";
import ManageUser from "@/page/admin/ManageUser";
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
    element: <ManageTickets />,
  },
  {
    title: "manage-users",
    url: "manage-users",
    icon: User,
    element: <ManageUser />,
  },
];
