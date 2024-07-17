import { useLocation } from "react-router-dom";
import { Crumb } from "../utils/interfaces";

const useBreadcrumb = () => {
  const { pathname } = useLocation();
  if (!pathname) return [];
  
  const pathnames = pathname.split("/").filter((x) => x);

  function createBreadcrumbList(): Crumb[] {
    const breadcrumb: Crumb[] = [];

    if (pathnames.length > 0) {
      breadcrumb.push({ label: "Home", to: "/" });
    } else {
      breadcrumb.push({ label: "Home", to: "" });
    }

    pathnames.forEach((path, index) => {
      const crumb: Crumb = { label: path, to: "" };
      if (pathnames.length - index > 1) crumb.to = path;
      breadcrumb.push(crumb);
    });

    return breadcrumb;
  }

  return createBreadcrumbList();
};

export default useBreadcrumb;
