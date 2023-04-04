import { useState, useEffect } from "react";
import { listConversation, chatMessages } from "./datasource";

const useDetailChat = (param) => {
  const [detailChat, setDetailChat] = useState({ loading: false, data: null });

  const getList = () => {
    setDetailChat({ ...detailChat, loading: true });
    setTimeout(() => {
      const data = listConversation.find((element) => element.id === param);
      const findChatMessages = chatMessages.find(
        (element) => element.id === param
      );

      setDetailChat({
        ...detailChat,
        loading: false,
        data: { ...data, chatMessages: findChatMessages },
      });
    }, 1000);
  };

  useEffect(() => {
    getList();
  }, []);

  return { detailChat };
};

export { useDetailChat };
