import React from "react";
import { Link } from "react-router-dom";
import { BreadcrumbProps } from "../utils/props";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbs = [] }) => {
  return (
    <div className="container breadcrumbs">
      <div className="row">
        {breadcrumbs ? (
          <ul>
            {breadcrumbs?.map((crumb, index) => (
              <li key={index}>
                {breadcrumbs.length - index > 1 ? (
                  <>
                    <Link to={crumb.to}>{crumb.label}</Link>
                    <p className="arrow">&gt;</p>
                  </>
                ) : (
                  <p>{crumb.label}</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
