import { useEffect, useRef } from "react";
import useGetMessages from "../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "./Skeletons/MessageSkeleton";
import useListenMessages from "../hooks/useListenMessages";
import { useSelector } from "react-redux";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const selectedConversation = useSelector(
    (state) => state.conversations.selectedConversation
  );
  useListenMessages();
  const lastMessageRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start conversation</p>
      )}
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => {
          if (
            message.receiverId === selectedConversation._id ||
            message.senderId === selectedConversation._id
          ) {
            return (
              <div key={message._id} ref={lastMessageRef}>
                <Message message={message} />
              </div>
            );
          }
        })}
    </div>
  );
};

export default Messages;
