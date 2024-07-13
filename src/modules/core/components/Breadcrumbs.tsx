import React from "react";
import { Link } from "react-router-dom";
import { BreadcrumbProps } from "../utils/props";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbs = [] }) => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumbs">
      <div className="container">
        <div className="row">
          {breadcrumbs ? (
            <ol>
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
            </ol>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
