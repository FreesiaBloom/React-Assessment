import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorState, User, UserState } from "../../core/utils/interfaces";
import { useSelector } from "react-redux";

const Users: FC = () => {
  const navigate = useNavigate();
  const { userData: users } = useSelector((state: UserState) => state.data || {});
  const { dataError: error } = useSelector((state: ErrorState) => state.data || {});

  if (error) {
    throw new Error('Users, something went wrong!');
  }

  function handleRowClick(userId: number) {
    navigate(`${userId}`);
  }

  return (
    <section>
      <div className="container">
        <div className="row table-responsive-md">
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
        </div>
      </div>
    </section>
  );
};

export default Users;
