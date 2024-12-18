import { useState } from "react";
import useConversation from "../../zustan/useConversation";
import useGetConversations from "../../Hooks/useGetConversations";

import { toast } from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      toast.error("Please Enter A Account Name To Search");
      return;
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No Conversation Found With That Name.");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center">
      <input
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search"
        className="input input-bordered w-full max-w-sm mr-4 input-sm md:input-md"
      />

      <button className="btn btn-square border border-primary btn-sm md:btn-md">
        <i className="bx bx-search text-md md:text-lg"></i>
      </button>
    </form>
  );
};

export default SearchInput;
