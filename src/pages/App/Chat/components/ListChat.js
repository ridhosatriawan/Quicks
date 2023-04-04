import React from "react";
import { Flex } from "@chakra-ui/react";
import { Search, Loading } from "../../../../components";
import CardChat from "./CardChat";

export default function ListChat(props) {
  const { handleSelect, chat } = props;

  return (
    <Flex direction="column" height="100%" padding="24px 32px">
      <Search />
      {chat.loading ? (
        <Loading title="Loading Chats..." />
      ) : (
        <Flex direction="column" textAlign="left">
          {chat?.data?.map((conversation, index) => (
            <CardChat
              key={index}
              onClick={handleSelect}
              conversation={conversation}
            />
          ))}
        </Flex>
      )}
    </Flex>
  );
}
