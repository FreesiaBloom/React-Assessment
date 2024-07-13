import { useLocation } from "react-router-dom";
import { Crumb } from "../utils/interfaces";

export default function useBreadcrumb() {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);

  function createBreadcrumbList() {
    const breadcrumb: Crumb[] = [];

    if (pathnames.length > 0) {
        breadcrumb.push({label: 'Home', to: '/'})
    } else {
        breadcrumb.push({label: 'Home', to: ''})
    }
    
    pathnames.forEach((path, index) => {
        const crumb: Crumb = { label: path, to: '' }
        if (pathnames.length - index > 1) crumb.to = path;
        breadcrumb.push(crumb);
    })

    return breadcrumb;
  }

  return createBreadcrumbList();
}
