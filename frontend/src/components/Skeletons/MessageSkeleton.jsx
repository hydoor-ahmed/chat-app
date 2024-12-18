const MessageSkeleton = () => {
  return (
    <>
      <div className="chat chat-start">
        {/* Reciver */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            {/* <img src="https://avatar.iran.liara.run/public/girl" /> */}
          </div>
        </div>
        <div className="chat-header">
          {/* Dajan Jan */}
          {/* <time className="text-xs opacity-50 ml-1">12:45</time> */}
        </div>
        <div className="chat-bubble">
          <div
            role="status"
            className="max-w-md py-1.5 animate-pulse dark:divide-gray-700 md:fp-6 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="chat-footer opacity-50">Delivered</div> */}
      </div>

      <div className="chat chat-end">
        {" "}
        {/* Sender */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            {/* <img src="https://avatar.iran.liara.run/public/boy" /> */}
          </div>
        </div>
        <div className="chat-header">
          <time className="text-xs opacity-50"></time>
        </div>
        <div className="chat-bubble">
          {" "}
          <div
            role="status"
            className="max-w-md py-1.5 animate-pulse dark:divide-gray-700 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5 ml-auto"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
      </div>
    </>
  );
};
export default MessageSkeleton;
