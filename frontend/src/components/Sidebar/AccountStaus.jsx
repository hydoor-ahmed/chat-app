import { useAuthContext } from "../../context/AuthContext";
import { useSocketContext } from "../../Context/SocketContext";

const AccountStatus = () => {
  const { authUser } = useAuthContext();
  const {onlineUsers}= useSocketContext();

  const isOnline = onlineUsers.includes(authUser._id);

  return (
    <div className="flex flex-row-reverse items-center">
      <div className="flex flex-col ml-2">
        <h1 className="text-white capitalize text-base">{authUser.fullName}</h1>
        <h1 className="text-sm max-w-[100px] text-wrap">
          @{authUser.username}
        </h1>
      </div>
      <div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
        <div className="w-9 rounded-full">
          <img src={authUser.profilePic} alt={authUser.fullName} />
        </div>
      </div>
    </div>
  );
};

export default AccountStatus;
