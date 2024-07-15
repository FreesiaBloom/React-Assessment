import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { dataActions } from "../store/dataSlice";
import Navbar from "../containers/Navbar";
import Footer from "../containers/Footer";
import Breadcrumb from "../components/Breadcrumbs";
import useBreadcrumb from "../hooks/useBreadcrumbs";
import { useAppDispatch } from "../hooks/readux-hooks";

export default function IndexPage() {
  const dispatch = useAppDispatch();
  const breadcrumbs = useBreadcrumb();

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
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Outlet />
      <Footer />
    </div>
  );
}