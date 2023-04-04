import React from "react";
import { Flex, Avatar, Box, Text } from "@chakra-ui/react";
import { Icon } from "../../../../assets";

export default function CardChat(props) {
  const { conversation } = props;
  return (
    <Flex
      onClick={() => {
        props.onClick(conversation.id);
      }}
      padding="22px 0"
      _hover={{ backgroundColor: "primary.400" }}
      _notFirst={{
        borderTop: "1px solid",
        borderColor: "primary.300",
      }}
      width="100%"
      gap="17px"
    >
      <Box width="51px" height="34px" position="relative">
        <Avatar
          bg="primary.400"
          size="sm"
          icon={<Icon.UserIcon color="primary.200" />}
          position="absolute"
          width="34px"
          height="34px"
        />
        <Avatar
          position="absolute"
          left="17px"
          bg="primary.100"
          width="34px"
          height="34px"
          size="sm"
          icon={<Icon.UserIcon />}
        />
      </Box>
      <Flex width="100%" direction="column">
        <Flex gap="16px" alignItems="flex-start">
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="primary.100"
            maxWidth="70%"
          >
            {conversation.groupName}
          </Text>
          <Text fontWeight="light" color="primary.200">
            {conversation.time}
          </Text>
        </Flex>
        <Box>
          <Text fontWeight="bold" fontSize="md" color="primary.200">
            {conversation.lastChat.username} :
          </Text>
          <Text fontSize="md" color="primary.200">
            {conversation.lastChat.message} :
          </Text>
        </Box>
      </Flex>
      {conversation.newMessage && (
        <Flex alignItems="center">
          <Box
            borderRadius="full"
            bg="indicator.300"
            width="10px"
            height="10px"
          />
        </Flex>
      )}
    </Flex>
  );
}
