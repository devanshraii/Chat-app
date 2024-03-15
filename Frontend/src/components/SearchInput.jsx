import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from "../hooks/useGetConversations";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setSelectedConversation } from "../features/conversations/conversationsSlice";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3)
      return toast.error("Search term must be at least 3 characters long");

    const conversation = conversations.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      dispatch(setSelectedConversation(conversation));
      setSearch("");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered rounded-full bg-[#2a3942] text-white"
      />
      <button type="submit" className="btn btn-circle text-white bg-[#005c4b]">
        <IoSearchSharp className="w-6 h-6 outline-none " />
      </button>
    </form>
  );
};

export default SearchInput;
