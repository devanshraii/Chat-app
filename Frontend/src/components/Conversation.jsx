import { useDispatch, useSelector } from "react-redux";
import { setSelectedConversation } from "../features/conversations/conversationsSlice";
import { useSocketContext } from "../features/socket/socket";

const Conversation = ({ conversation, lastIndex }) => {
  const dispatch = useDispatch();
  const selectedConversation = useSelector(
    (state) => state.conversations.selectedConversation
  );

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-[#1a242aad] rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-[#2a3942]" : ""
        }`}
        onClick={() => dispatch(setSelectedConversation(conversation))}>
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full ">
            <img src={conversation.profilePic} alt="User avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3">
            <p className="font-bold text-gray-200">{conversation.fullname}</p>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
