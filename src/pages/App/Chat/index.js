import React from "react";
import { ChatBox } from "./components";
import { useChat } from "./useChat";

function Chat() {
  const { data } = useChat();

  return <ChatBox data={data} />;
}

export default Chat;
