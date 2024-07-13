import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../../core/utils/interfaces";

const UserInfo: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const { userId } = useParams();

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
