import { useSocketContext } from "../../Context/SocketContext";
import useGetConversations from "../../Hooks/useGetConversations";
import useConversation from "../../zustan/useConversation";

const Conversation = ({ conversation }) => {
  const { loading } = useGetConversations();
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  const upperFullName =
    conversation.fullName[0].toUpperCase() + conversation.fullName.slice(1);

  return (
    <div>
      <div
        onClick={() => setSelectedConversation(conversation)}
        className={`flex justify-between items-center transition-all duration-300 cursor-pointer border border-transparent hover:border-primary from-purple-700/40 to-cyan-700/20 hover:bg-gradient-to-tr px-2 py-1.5 rounded-lg ${
          isSelected
            ? "border border-transparent border-primary from-purple-700/40 to-cyan-700/20 bg-gradient-to-tr"
            : ""
        }`}
      >
        <div className="flex items-center">
          <div
            className={`avatar mr-4 ${
              !loading && isOnline ? "online" : "offline"
            }`}
          >
            <div className="w-10 md:w-14 rounded-full">
              {loading ? (
                <span className="loading loading-ring loading-lg"></span>
              ) : (
                <img
                  src={conversation.profilePic}
                  alt={upperFullName}
                />
              )}
            </div>
          </div>
          <h1 className="text-white text-sm md:text-base font-bold">
            {loading ? (
              <div className="text-base-content">
                <span className="loading loading-bars loading-md"></span>
              </div>
            ) : conversation.fullName === "sajar404" ? (
              <>
                <span class="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full dark:bg-gray-700 dark:text-blue-400">
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                    />
                    <path
                      fill="#fff"
                      d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                    />
                  </svg>
                  <span class="sr-only">Owner</span>
                </span>
                {upperFullName}
              </>
            ) : (
              upperFullName
            )}
          </h1>
        </div>
      </div>
      <span className="divider w-[80%] mx-auto my-1"></span>
    </div>
  );
};

export default Conversation;
