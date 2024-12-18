import { useState } from "react";
import useSendMessage from "../../Hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessages] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessages("");
  };

  return (
    <div className="mt-1">
      <form onSubmit={handleSubmit} className="input input-bordered flex items-center gap-2">
        <input
          value={message}
          onChange={(e) => setMessages(e.target.value)}
          dir="auto"
          type="text"
          className="grow input"
          placeholder="Search"
        />
        <button
          disabled={loading}
          className="cursor-pointer btn btn-neutral px-2 btn-sm"
        >
          {loading ? (
            <span className="loading loading-ring loading-xs md:loading-sm"></span>
          ) : (
            <i className="bx bx-send text-sm md:text-xl -rotate-[30deg]"></i>
          )}
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
