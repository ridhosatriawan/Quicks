import { useState, useEffect } from "react";
import { listConversation } from "./datasource";

const useChat = () => {
  const [chat, setChat] = useState({ loading: false, data: null });

  const getList = async () => {
    setChat({ ...chat, loading: true });
    setTimeout(() => {
      setChat({ ...chat, loading: false, data: listConversation });
    }, 1000);
  };

  useEffect(() => {
    getList();
  }, []);

  return { chat };
};

export { useChat };
