import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Post, User } from "../../core/utils/interfaces";

const UserInfo: React.FC = () => {
  const { userData: users } = useSelector((state) => state.data);
  const [posts, setPosts] = useState([]);
  const { userId } = useParams();
  const selectedUser = users.find((user: User) => user.id === Number(userId));

  const location = useLocation();
  const navigate = useNavigate();

  function handleRowClick(postId: number) {
    navigate(`${postId}`);
  }

  useEffect(() => {
    (async () => {
      const postsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      const postData = await postsResponse.json();
      setPosts(postData);
    })();
  }, [userId]);

  useEffect(() => {
    if (posts.length > 0) {
    //   navigate(location.pathname);
    }
  }, [posts]);

  return (
    <section>
      <div className="container">
        <div className="row table-responsive-md">
          {posts && posts.length > 0 ? (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {posts?.map((post: Post) => (
                  <tr key={post.id} onClick={() => handleRowClick(post.id)}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
