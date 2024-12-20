import { extractTime } from "../../utils/Time";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustan/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const shakeClass = message.shouldShake ? "shake" : "";

  const formattedTime = extractTime(
    typeof message.message === "object"
      ? message.message.createdAt
      : message.createdAt
  );

  const text =
    typeof message.message === "object"
      ? message.message.message
      : message.message;

  const fromMe =
    typeof message.message === "object"
      ? message.message.senderId
      : message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Profile Pic" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white pb-2 text-sm md:text-base max-w-[345px] ${shakeClass}`}
      >
        <p className="w-full text-wrap">{text}</p>
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-wrap">
        {formattedTime}
      </div>
    </div>
  );
};
export default Message;
