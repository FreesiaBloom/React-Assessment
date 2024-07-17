import { ReactNode } from "react";
import { Crumb } from "./interfaces";

export interface BreadcrumbProps {
  breadcrumbs: Crumb[];
}

export interface ErrorBoundaryProps {
  children?: ReactNode;
}
