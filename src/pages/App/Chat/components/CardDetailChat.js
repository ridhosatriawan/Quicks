import React from "react";
import {
  Flex,
  Text,
  Box,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverBody,
  PopoverContent,
} from "@chakra-ui/react";
import { Icon } from "../../../../assets";

function ActionChat(props) {
  const { data } = props;

  const handleDelete = () => {
    console.log(`delete `, { data });
  };

  const handleEdit = () => {
    console.log(`delete `, { data });
  };
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Icon.MoreHorizIcon />
      </PopoverTrigger>
      <PopoverContent width="126px">
        <PopoverBody padding="0">
          <Flex direction="column" textAlign="left">
            <Text onClick={handleEdit} p="1.5" color="primary.100">
              Edit
            </Text>
            <Divider />
            <Text onClick={handleDelete} p="1.5" color="indicator.300">
              Hapus
            </Text>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

function CardDetailRight(props) {
  const { data } = props;
  return (
    <Flex
      justifyContent="flex-end"
      padding="10px 20px"
      direction="column"
      gap="10px"
    >
      <Text color="chat.300">{data.sender}</Text>
      <Flex justifyContent="flex-end" gap="10px">
        <ActionChat data={data} />
        <Box
          maxWidth="518px"
          bg="chat.400"
          padding="10px"
          textAlign="left"
          borderRadius="5px"
        >
          <Text>{data.text}</Text>
          <Text>{data.timestamp}</Text>
        </Box>
      </Flex>
    </Flex>
  );
}

function CardDetailLeft(props) {
  const { data } = props;

  return (
    <Flex
      justifyContent="flex-start"
      padding="10px 20px"
      direction="column"
      gap="10px"
    >
      <Text
        textAlign="left"
        color={data.colorId == "se2" ? "chat.100" : "chat.500"}
      >
        {data.sender}
      </Text>
      <Flex justifyContent="flex-end" gap="10px" direction="row-reverse">
        <ActionChat data={data} />
        <Box
          maxWidth="518px"
          bg={data.colorId === "se2" ? "chat.200" : "chat.600"}
          padding="10px"
          textAlign="left"
          borderRadius="5px"
        >
          <Text>{data.text}</Text>
          <Text>{data.timestamp}</Text>
        </Box>
      </Flex>
    </Flex>
  );
}

const CardDetailChat = (props) => {
  const { data } = props;

  return (
    <>
      {data?.chatMessages?.data?.map((element, i) => (
        <Box key={i}>
          <Flex
            alignItems="center"
            gap="20px"
            justifyContent="space-around"
            padding="0 20px"
          >
            <Divider opacity="1" background="primary.200" />
            <Text fontWeight="bold" whiteSpace="nowrap">
              {element.timestamp}
            </Text>
            <Divider opacity="1" background="primary.200" />
          </Flex>

          {element.chat.map((childElement) =>
            childElement.sender === "You" ? (
              <CardDetailRight key={childElement.id} data={childElement} />
            ) : (
              <CardDetailLeft key={childElement.id} data={childElement} />
            )
          )}
        </Box>
      ))}
    </>
  );
};

export default CardDetailChat;
