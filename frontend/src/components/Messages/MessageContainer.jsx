import { useEffect } from "react";
import useConversation from "../../zustan/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useAuthContext } from "../../context/AuthContext";
import { useSocketContext } from "../../context/SocketContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(selectedConversation?._id);

  useEffect(() => {
    // clean up function ( unmounts ) == The Function Is Run When The Component Is Not In The View
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        //md:min-w-[500px] md:max-w-[500px]
        <div className="w-full flex flex-col px-4">
          <div className="flex items-center gap-4">
            <div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
              <div className="w-10 rounded-full">
                <img
                  src={selectedConversation.profilePic}
                  alt={selectedConversation.fullName}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white font-bold">
                {selectedConversation.fullName}
              </h1>
              <h4 className="text-sm">{isOnline ? "Online" : "Offline"}</h4>
            </div>
          </div>
          <span className="divider w-[95%] mx-auto my-2"></span>

          <Messages />
          <MessageInput />
        </div>
      )}
    </>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="ml-4 flex flex-col items-center justify-center w-full md:min-w-[450px] h-full">
      <h1 className="md:text-xl text-white mb-1">
        Welcome 👋 {authUser.fullName} ❄️
      </h1>
      <h2 className="text-white text-sm md:text-base">
        Select a chat to start messaging
      </h2>
      <i className="bx bx-chat text-4xl md:text-6xl text-white mt-2"></i>
    </div>
  );
};

export default MessageContainer;
