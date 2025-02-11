import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TUserPath = {
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};
