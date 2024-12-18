import useGetConversations from "../../Hooks/useGetConversations";
import useConversation from "../../zustan/useConversation";

const Conversation = ({ conversation }) => {
  const { loading } = useGetConversations();
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <div>
      <div
        onClick={() => setSelectedConversation(conversation)}
        className={`flex justify-between items-center transition-all duration-300 cursor-pointer border border-transparent hover:border-primary from-purple-700/40 to-cyan-700/20 hover:bg-gradient-to-tr px-2 py-1.5 rounded-lg ${
          isSelected ? "border border-transparent border-primary from-purple-700/40 to-cyan-700/20 bg-gradient-to-tr" : ""
        }`}
      >
        <div className="flex items-center">
          <div className={`avatar mr-4 ${loading ? "" : "online"}`}>
            <div className="w-10 md:w-14 rounded-full">
              {loading ? (
                <span className="loading loading-ring loading-lg"></span>
              ) : (
                <img
                  src={conversation.profilePic}
                  alt={conversation.fullName}
                />
              )}
            </div>
          </div>
          <h1 className="text-white text-sm md:text-base font-bold">
            {loading ? (
              <div className="text-base-content">
                <span className="loading loading-bars loading-md"></span>
              </div>
            ) : (
              conversation.fullName
            )}
          </h1>
        </div>
      </div>
      <span className="divider w-[80%] mx-auto my-1"></span>
    </div>
  );
};

export default Conversation;
