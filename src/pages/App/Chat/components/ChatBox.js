import { Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useChat } from "../useChat";
import DetailChat from "./DetailChat";
import ListChat from "./ListChat";

const ChatsBox = (props) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const { chat } = useChat();

  const handleSelect = (id) => {
    setSelectedChat(id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        bg="white"
        borderRadius="5px"
        marginBottom="20px"
        height="736px"
        width="734px"
      >
        {selectedChat !== null ? (
          <DetailChat
            selectedChat={selectedChat}
            handleClose={() => {
              setSelectedChat(null);
            }}
          />
        ) : (
          <ListChat handleSelect={handleSelect} chat={chat} />
        )}
      </Box>
    </motion.div>
  );
};

export default ChatsBox;
