import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import IndexPage from "./IndexPage";
import Users from "../../users/components/Users";
import UserInfo from "../../users/components/UserInfo";
import PostInfo from "../../users/components/PostInfo";

function Routes() {
  return (
    <Route id="home" element={<IndexPage />}>
      <Route index element={<Users />} />
      <Route id="userInfo" path=":userId" element={<UserInfo />} />
      <Route id="postInfo" path=":userId/:postId" element={<PostInfo />} />
      <Route path="*" element={<Users />} />
    </Route>
  );
}

const router = createBrowserRouter(createRoutesFromElements(Routes()));
export default router;
