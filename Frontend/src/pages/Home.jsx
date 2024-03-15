import { useState } from "react";
import MessageContainer from "../components/MessageContainer";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [showChats, setShowChats] = useState(false);
  return (
    <div className="flex sm:flex-row flex-col min-h-[550px] w-full rounded-lg overflow-hidden max-w-5xl mx-auto bg-[#1a272e] h-[calc(100dvh-40px)] relative sm:max-h-[700px]">
      <div
        className={`w-full sm:w-fit h-full ${
          showChats ? "hidden sm:flex" : "flex"
        }`}>
        <Sidebar showChats={showChats} setShowChats={setShowChats} />
      </div>
      <div className={`w-full h-full ${showChats ? "flex" : "hidden sm:flex"}`}>
        <MessageContainer showChats={showChats} setShowChats={setShowChats} />
      </div>
    </div>
  );
};

export default Home;
