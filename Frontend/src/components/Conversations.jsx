import useGetConversations from "../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = ({ showChats, setShowChats }) => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? <span className="loading loading-spinner"></span> : null}
      {!loading &&
        conversations.map((conversation, i) => (
          <div key={conversation._id} onClick={() => setShowChats(true)}>
            <Conversation
              conversation={conversation}
              lastIndex={i === conversations.length - 1}
            />
          </div>
        ))}
    </div>
  );
};

export default Conversations;
