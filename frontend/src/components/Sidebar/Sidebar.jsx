import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";
import SearchInput from "./SearchInput";
import AccountStatus from "./AccountStaus";

const Sidebar = () => {
  return (
    <div className="md:border-r-2 border-slate-600 md:pr-2">
      <SearchInput />
      <span className="divider w-[80%] mx-auto"></span>
      <Conversations />
      <div className="flex justify-between items-center px-2 py-1 bg-neutral rounded-lg mx-2 h-[55px] mt-2">
        <AccountStatus />
        <LogoutBtn />
      </div>
    </div>
  );
};

export default Sidebar;
