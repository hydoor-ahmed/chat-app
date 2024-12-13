import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <span className="divider w-[80%] mx-auto"></span>
      <Conversations />
      <LogoutBtn />
    </div>
  )
}

export default Sidebar;
