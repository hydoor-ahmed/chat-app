const Message = () => {
  return (
    <div>
      <div className="chat chat-start"> {/* Reciver */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://avatar.iran.liara.run/public/girl" />
          </div>
        </div>
        <div className="chat-header">
          {/* Dajan Jan */}
          <time className="text-xs opacity-50 ml-1">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        {/* <div className="chat-footer opacity-50">Delivered</div> */}
      </div>

      <div className="chat chat-end"> {/* Sender */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://avatar.iran.liara.run/public/boy" />
          </div>
        </div>
        <div className="chat-header">
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
      </div>
    </div>
  );
};

export default Message;
