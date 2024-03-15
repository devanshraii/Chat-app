import { useDispatch, useSelector } from "react-redux";
import { useSocketContext } from "../features/socket/socket";
import { setMessages } from "../features/conversations/conversationsSlice";
import { useEffect } from "react";
import notificationSound from "../assets/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const messages = useSelector((state) => state.conversations.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notificationSound);
      sound.play();
      dispatch(setMessages([...messages, newMessage]));
    });

    return () => {
      socket?.off();
    };
  }, [socket, messages, dispatch]);
};

export default useListenMessages;
