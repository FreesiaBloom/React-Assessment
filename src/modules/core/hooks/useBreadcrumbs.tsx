import { useLocation, useMatches } from "react-router-dom";
import { BREADCRUMB } from "../utils/constants";
import { Crumb } from "../utils/interfaces";

export default function useBreadcrumb() {
  const matches = useMatches();
  const location = useLocation();

  function createBreadcrumbList() {
    const breadcrumb: Crumb[] = [];
    matches.forEach((route, index) => {
      const crumb: Crumb = {label: "",to: ""};

      let label = BREADCRUMB[route.id];
      if (route.pathname === location.pathname) {
        label = location?.state?.breadcrumb?.pageName || BREADCRUMB[route.id];
      }
      crumb.label = label;
      if (!crumb.label) return;

      if (matches.length - index > 1) crumb.to = route.pathname;
      breadcrumb.push(crumb);
    });

    return breadcrumb;
  }

  return createBreadcrumbList();
}
