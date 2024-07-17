import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../../core/utils/interfaces";

const UserInfo: FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [posts, setPosts] = useState([]);
  const { userId } = useParams();

  const navigate = useNavigate();

  function handleRowClick(postId: number) {
    navigate(`${postId}`);
  }

  if (error) {
    throw new Error("UserInfo, something went wrong!");
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typico=de.com/posts?userId=${userId}`
        );
        if (response.ok) {
          const postData = await response.json();
          setPosts(postData);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      }
    })();
  }, [userId]);

  return (
    <section>
      <div className="container">
        <div className="row table-responsive-md">
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
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
