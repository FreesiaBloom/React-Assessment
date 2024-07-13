import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../../core/utils/interfaces";

const PostInfo: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const { postId } = useParams();

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
