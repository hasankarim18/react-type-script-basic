import UserList from "./UserList";
import useUsersData from "../hooks/useUsersData";

const UsersContainer = () => {
  const { isLoading, error, data } = useUsersData();
  return <UserList isLoading={isLoading} error={error} data={data} />;
};

export default UsersContainer;
