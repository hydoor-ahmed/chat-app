import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <>
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <div className="md:min-w-[450px] flex flex-col px-4">
          <div className="flex items-center gap-4">
            <div className="avatar online">
              <div className="w-10 rounded-full">
                <img src="https://avatar.iran.liara.run/public/girl" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white font-bold">Dajan Jan</h1>
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
    <div className="flex flex-col items-center justify-center md:min-w-[450px] h-full">
      <h1 className="text-xl text-white mb-1">Welcome 👋 Sajar404 ❄️</h1>
      <h2 className="text-white ">Select a chat to start messaging</h2>
      <i className='bx bx-chat text-6xl text-white mt-2'></i>
    </div>
  );
};

export default MessageContainer;
