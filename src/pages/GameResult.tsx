import WithBordres from "../components/WithBordres";
import UserAvatar from "../components/UserAvatar";

const UserWithBorder = WithBordres(UserAvatar);

const GameResult = () => {
  return (
    <div className="flex justify-center gap-4 min-h-40 items-center">
      <UserAvatar
        imageUrl={
          "https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_1280.png"
        }
      />
      <UserWithBorder
        imageUrl={
          "https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_1280.png"
        }
      />
      <UserAvatar
        imageUrl={
          "https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_1280.png"
        }
      />
      <UserAvatar
        imageUrl={
          "https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_1280.png"
        }
      />
    </div>
  );
};

export default GameResult;
