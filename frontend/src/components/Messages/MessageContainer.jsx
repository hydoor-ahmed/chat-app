import { useEffect } from "react";
import useConversation from "../../zustan/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // clean up function ( unmounts ) == The Function Is Run When The Component Is Not In The View
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className="w-full md:min-w-[500px] md:max-w-[500px] flex flex-col px-4">
          <div className="flex items-center gap-4">
            <div className="avatar online">
              <div className="w-10 rounded-full">
                <img src={selectedConversation.profilePic} alt={selectedConversation.fullName} />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white font-bold">{selectedConversation.fullName}</h1>
              <h4 className="text-sm">Online</h4>
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
  return (
    <div className="ml-4 flex flex-col items-center justify-center w-full md:min-w-[450px] h-full">
      <h1 className="md:text-xl text-white mb-1">Welcome 👋 Sajar404 ❄️</h1>
      <h2 className="text-white text-sm md:text-base">Select a chat to start messaging</h2>
      <i className='bx bx-chat text-4xl md:text-6xl text-white mt-2'></i>
    </div>
  );
};

export default MessageContainer;
