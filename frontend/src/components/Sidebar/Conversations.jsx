import useGetConversations from "../../Hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return ( // sm:h-[280px]
    <div className="border-r border-slate-400 overflow-y-scroll sm:min-w-[250px] md:w-auto h-[80%] md:h-[380px] pr-2">

      {loading ? (
        <div className="flex items-center justify-center">
          <span className="loading loading-ring loading-md mr-2"></span>
          Loading...
        </div>
      ) : (
        conversations.map((conversation) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
          />
        ))
      )}
    </div>
  );
};

export default Conversations;
