import { AppDispatch, RootState } from "@/store";
import { fetchUsers } from "@/store/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonView from "./ButtonView";

const UserDetail: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h2>Users:</h2>
      <div>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              margin: 20,
            }}
          >
            {user.id} {user.name} {user.email} <ButtonView userId={user.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetail;
