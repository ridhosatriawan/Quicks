import { Box, Button, Flex, Input, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { Icon } from "../../../../assets";
import { Loading } from "../../../../components";
import { useDetailChat } from "../useDetailChat";
import CardDetailChat from "./CardDetailChat";

export default function DetailChat(props) {
  const { handleClose, selectedChat } = props;
  const { detailChat } = useDetailChat(selectedChat);

  return (
    <Flex width="100%" height="100%" flexDirection="column">
      {detailChat.loading ? (
        <Loading title="Loading Chats..." />
      ) : (
        <>
          <Flex
            alignItems="flex-start"
            justifyContent="space-between"
            padding="20px 30px"
            borderBottom="1px solid"
            borderColor="primary.300"
          >
            <Flex alignItems="flex-start" gap="20px">
              <Icon.ArrowLeftIcon
                onClick={handleClose}
                width="26px"
                height="26px"
              />
              <Box textAlign="left">
                <Text fontWeight="bold" color="primary.100">
                  {detailChat.data?.groupName}
                </Text>
                <Text fontSize="sm">
                  {detailChat.data?.participant} participant
                </Text>
              </Box>
            </Flex>
            <Icon.CloseIcon onClick={handleClose} />
          </Flex>

          <Flex flexGrow="1" overflow="auto" flexDirection="column">
            <CardDetailChat data={detailChat.data} />
          </Flex>
          {detailChat.data?.chatMessages?.newMessage && (
            <Flex justifyContent="center">
              <Box
                borderRadius="5px"
                bg="sticker.100"
                padding="10px 20px"
                color="primary.100"
                margin="10px 20px"
              >
                New Message
              </Box>
            </Flex>
          )}
          {detailChat.data?.chatMessages?.connecting && (
            <Flex
              bg="sticker.100"
              margin="10px 20px"
              padding="20px"
              borderRadius="5px"
              gap="20px"
            >
              <Spinner color="primary.100" size="md" />
              <Text>
                Please wait while we connect you with one of our team...
              </Text>
            </Flex>
          )}
          <Flex padding="19px" gap="13px">
            <Input placeholder="Type a new message" />
            <Button bg="primary.100">Send</Button>
          </Flex>
        </>
      )}
    </Flex>
  );
}
