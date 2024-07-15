import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ErrorState, User, UserState } from "../../core/utils/interfaces";
import { FC } from "react";

const Users: FC = () => {
  const navigate = useNavigate();
  const { userData: users } = useSelector((state: UserState) => state.data);
  const { dataError: error } = useSelector((state: ErrorState) => state.data);

  function handleRowClick(userId: number) {
    navigate(`${userId}`);
  }

  return (
    <section>
      <div className="container">
        <div className="row table-responsive-md">
          {error ? (
            <div className="text-danger">HTTP ERROR</div>
          ) : (
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
          )}

          {/* {users && users.length > 0 ? (
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
            <>
              {error && (
                <div className="text-danger">HTTP ERROR</div>
              )}
            </>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default Users;
