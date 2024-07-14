import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import IndexPage from "./IndexPage";
import { lazy, Suspense } from "react";
import Loading from "../containers/Loading";

const LazyUsers = lazy(() => import("../../users/components/Users"));
const LazyUserInfo = lazy(() => import("../../users/components/UserInfo"));
const LazyPostInfo = lazy(() => import("../../users/components/PostInfo"));

const getComponent = (component: any) => {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
};

function Routes() {
  return (
    <Route id="home" element={<IndexPage />}>
      <Route index element={getComponent(<LazyUsers />)} />
      <Route
        id="userInfo"
        path=":userId"
        element={getComponent(<LazyUserInfo />)}
      />
      <Route
        id="postInfo"
        path=":userId/:postId"
        element={getComponent(<LazyPostInfo />)}
      />
      <Route path="*" element={getComponent(<LazyUsers />)} />
    </Route>
  );
}

const router = createBrowserRouter(createRoutesFromElements(Routes()));
export default router;
