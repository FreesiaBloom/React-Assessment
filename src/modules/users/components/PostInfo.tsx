import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Post, User } from "../../core/utils/interfaces";

const PostInfo: React.FC = () => {
  const { userData: users } = useSelector((state) => state.data);
  const { postData: userPosts } = useSelector((state) => state.data);
  const [posts, setPosts] = useState<Post[]>([]);

  const { userId } = useParams();
  const { postId } = useParams();
  const selectedUser = users.find((user: User) => user.id === Number(userId));
  const selectedPost = userPosts.find(
    (post: Post) => post.id === Number(postId)
  );

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const postsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts?id=${postId}`
      );
      const postData = await postsResponse.json();
      // api always returns array, but this call should always return this one selected post
      setPosts(postData);
    })();
  }, [postId]);

  useEffect(() => {
    if (posts) {
    //   navigate(location.pathname);
    }
  }, [posts]);

  return (
    <section>
      <div className="container">
        <div className="row table-responsive-md">
          {posts && posts.length > 0 ? (
            <>
              {posts.map((post: Post) => (
                <ul className="list" key={post.id}>
                  <li>
                    <strong>{post.title}</strong>
                  </li>
                  <li>{post.body}</li>
                </ul>
              ))}
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PostInfo;
