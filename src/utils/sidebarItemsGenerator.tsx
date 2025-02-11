import { LucideIcon } from "lucide-react";
import React, { JSX } from "react";
import { NavLink } from "react-router-dom";

export type TUserPath = {
  title: string;
  url: string;
  icon: LucideIcon;
  element: React.ReactNode;
  children?: TUserPath[];
};

export type TSidebarItem = {
  key: string;
  label: JSX.Element | string;
  icon: JSX.Element;
  element: React.ReactNode;
  children?: TSidebarItem[];
};

export const sidebarItemsGenerator = (
  items: TUserPath[],
  role: string
): TSidebarItem[] => {
  return items.reduce((acc: TSidebarItem[], item) => {
    if (item.url && item.title && item.element) {
      acc.push({
        key: item.title,
        label: (
          <NavLink to={`/${role}/${item.url}`}>
            {item.icon && <item.icon className="w-5 h-5 mr-2" />}
            {item.title}
          </NavLink>
        ),
        icon: <item.icon className="w-5 h-5" />,
        element: item.element,
      });
    }

    if (item.children && item.children.length > 0) {
      acc.push({
        key: item.title,
        label: item.title,
        icon: <item.icon className="w-5 h-5" />,
        element: (
          <div>
            {item.children?.map((child) => (
              <NavLink to={`/${role}/${child.url}`}>{child.title}</NavLink>
            ))}
          </div>
        ),
        children: item.children.map((child) => ({
          key: child.title,
          label: <NavLink to={`/${role}/${child.url}`}>{child.title}</NavLink>,
          icon: <child.icon className="w-4 h-4" />,
          element: child.element,
        })),
      });
    }

    return acc;
  }, []);
};
