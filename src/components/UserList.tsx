const UserList = ({ isLoading, error, data }) => {
  if (isLoading && !error) {
    return <p className="text-3xl">Loading...</p>;
  }

  if (error) {
    return <div className="alert-warning">some thing went wrong</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default UserList;
