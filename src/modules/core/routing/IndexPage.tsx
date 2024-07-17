import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { dataActions } from "../store/dataSlice";
import Navbar from "../containers/Navbar";
import Footer from "../containers/Footer";
import Breadcrumb from "../components/Breadcrumbs";
import useBreadcrumb from "../hooks/useBreadcrumbs";
import { Crumb } from "../utils/interfaces";
import { useDispatch } from "react-redux";

const IndexPage = () => {
  const dispatch = useDispatch();
  const breadcrumbs: Crumb[] = useBreadcrumb();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (response.ok) {
          const userData = await response.json();
          dispatch(dataActions.setUserData(userData));
        } else {
          dispatch(dataActions.setDataError(true));
        }
      } catch {
        dispatch(dataActions.setDataError(true));
      }
    })()
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      {(breadcrumbs && breadcrumbs.length > 0) && <Breadcrumb breadcrumbs={breadcrumbs} />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default IndexPage;