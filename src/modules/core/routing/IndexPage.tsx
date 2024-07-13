import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";
import useBreadcrumb from "../hooks/useBreadcrumbs";
import { dataActions } from "../store/dataSlice";
import Navbar from "../containers/Navbar";
import Footer from "../containers/Footer";

export default function IndexPage() {
  const dispatch = useDispatch();
  const breadcrumbs = useBreadcrumb();

  useEffect(() => {
    (async () => {
      try {
        const userRequest = fetch("https://jsonplaceholder.typicode.com/users");

        const [userResponse] = await Promise.all([
          userRequest
        ]);
        const [userData] = await Promise.all([
          userResponse.json()
        ]);

        dispatch(dataActions.setUserData(userData));
      } catch (error) {
        dispatch(dataActions.setDataError(true));
      }
    })();
  }, [dispatch]);

  return (
    <div className="App">
      
      <Navbar />
      {/* {breadcrumbs.length > 1 && <Breadcrumb breadcrumbs={breadcrumbs} />} */}
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Outlet />
      <Footer />
    </div>
  );
}