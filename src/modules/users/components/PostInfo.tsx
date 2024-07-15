import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../../core/utils/interfaces";

const PostInfo: FC = () => {
  const [ error, setError ] = useState<boolean>(false);
  const [ posts, setPosts ] = useState<Post[]>([]);

  const { postId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${postId}`);
        if (response.ok) {
          const postData = await response.json();
          setPosts(postData);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      }
    })()
  }, [postId]);

  return (
    <section>
      <div className="container">
        <div className="row table-responsive-md">
          {error ? (
            <div className="text-danger">HTTP ERROR</div>
          ) : (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default PostInfo;

