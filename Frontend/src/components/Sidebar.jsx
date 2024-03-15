import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import LogoutButton from "./LogoutButton";

const Sidebar = ({ showChats, setShowChats }) => {
  return (
    <div className="sm:border-r sm:border-slate-500 p-4 flex flex-col bg-[#202c33] w-full sm:w-fit ">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations showChats={showChats} setShowChats={setShowChats} />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
