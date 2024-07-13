import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { User } from "../../core/utils/interfaces";

const Users: React.FC = () => {
  const navigate = useNavigate();
  const { userData: users } = useSelector((state) => state.data);

  function handleRowClick(userId: number) {
    navigate(`${userId}`);
  }

  return (
    <section>
      <div className="container">
        <div className="row table-responsive-md">
          {users && users.length > 0 ? (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>UserName</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user: User) => (
                  <tr key={user.id} onClick={() => handleRowClick(user.id)}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
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

export default Users;
