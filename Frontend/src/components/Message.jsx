import { useSelector } from "react-redux";
import { extractTime } from "../utils/extractTime";

const Message = ({ message }) => {
  const user = useSelector((state) => state.auth.user);
  const fromMe = user._id === message.senderId;
  const chatStyle = fromMe ? "chat-end" : "chat-start";
  const chatBg = fromMe ? "bg-[#005c4b]" : "bg-[#202c33]";
  const messageCreatedAt = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatStyle}`}>
      <div
        className={`chat-bubble text-white ${chatBg} pb-2  max-w-xs md:max-w-md`}>
        <p className="break-words">{message.message}</p>
      </div>
      <div
        className={`chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-300`}>
        {messageCreatedAt}
      </div>
    </div>
  );
};

export default Message;
