const UserAvatar = ({ imageUrl }) => {
  return (
    <div className="flex justify-center">
      <img
        className="w-16 h-16 border border-2-red p-2"
        src={imageUrl}
        alt="user avatar"
      />
    </div>
  );
};

export default UserAvatar;
