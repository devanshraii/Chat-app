import { BsSend } from "react-icons/bs";
import { useForm } from "react-hook-form";
import useSendMessage from "../hooks/useSendMessage";

const MessageInput = () => {
  const { register, handleSubmit, resetField } = useForm();

  const { loading, sendMessage } = useSendMessage();

  const onSubmit = async (data) => {
    await sendMessage(data);
    resetField("message");
  };

  return (
    <form className="px-4 bg-[#202c33] py-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white"
          placeholder="Send a message"
          {...register("message", { required: "Please enter a message" })}
        />
        <div className="absolute inset-y-0 end-0 flex items-center pe-2">
          <button type="submit" className="bg-gray-600 p-2 rounded-full">
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <BsSend />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default MessageInput;
