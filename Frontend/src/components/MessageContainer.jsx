import { useDispatch, useSelector } from "react-redux";
import Messages from "../components/Messages";
import MessageInput from "./MessageInput";
import { setSelectedConversation } from "../features/conversations/conversationsSlice";
import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";

const MessageContainer = ({ showChats, setShowChats }) => {
  const dispatch = useDispatch();
  const selectedConversation = useSelector(
    (state) => state.conversations.selectedConversation
  );

  useEffect(() => {
    return () => {
      dispatch(setSelectedConversation(null));
    };
  }, [dispatch]);

  return (
    <div className="md:min-w-[450px] flex flex-col back-image bg-cover w-full">
      {!selectedConversation ? (
        <NoChatSelected showChats={showChats} setShowChats={setShowChats} />
      ) : (
        <>
          {/* Header */}
          <div className="bg-[#202c33] px-4 py-2 mb-2 flex items-center gap-2">
            <button
              className="sm:hidden block"
              onClick={() => setShowChats(false)}>
              <IoArrowBack />
            </button>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={selectedConversation?.profilePic} alt="avatar" />
              </div>
            </div>
            <span className="text-white font-bold">
              {selectedConversation.fullname}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = ({ showChats, setShowChats }) => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <button className="sm:hidden block" onClick={() => setShowChats(false)}>
        <IoArrowBack />
      </button>
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {user.fullname}</p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  );
};
