import {
  Box,
  Text,
  Flex,
  useDisclosure,
  Collapse,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Icon } from "../../../../assets";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { formatDate } from "../../../../utils";
import { useTask } from "../useTask";

const ButtonChecked = (props) => {
  const { checked, handleCheck } = props;

  return (
    <Flex>
      {checked ? (
        <Icon.UncheckedIcon
          onClick={handleCheck}
          width="16px"
          height="16px"
          color="primary.300"
        />
      ) : (
        <Icon.CheckedIcon
          onClick={handleCheck}
          width="16px"
          height="16px"
          color="primary.300"
        />
      )}
    </Flex>
  );
};

const HeaderCardTask = (props) => {
  const { data, handleCheck, isOpen, onToggle } = props;
  const { checked } = useTask();

  return (
    <Flex
      padding="10px 0"
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      width="100%"
    >
      <Flex alignItems="center" gap="5px">
        <ButtonChecked
          checked={data.checked}
          handleCheck={() => {
            checked(data.id);
          }}
        />
        <Text fontSize="md">{data.title}</Text>
      </Flex>
      <Flex gap="20px" alignItems="center">
        {data.timeLeft !== 0 && (
          <Text color="indicator.300" fontSize="md">
            {data.timeLeft} Days Left
          </Text>
        )}
        <Text fontSize="md">{data.date}</Text>
        <Box onClick={onToggle}>
          {isOpen ? (
            <ChevronUpIcon width="20px" />
          ) : (
            <ChevronDownIcon width="20px" />
          )}
        </Box>
        <Box>
          <Icon.MoreHorizIcon />
        </Box>
      </Flex>
    </Flex>
  );
};

const ContentCardTask = (props) => {
  const { isOpen, data } = props;

  const formatedDate = formatDate(data.date);

  return (
    <Collapse in={isOpen} animateOpacity>
      <Flex direction="column" gap="10px">
        <Flex ml="20px" gap="10px" alignItems="center">
          <Icon.ClockIcon color="primary.200" />
          <Box>
            <Input
              type="date"
              size="md"
              border="1px solid"
              value={formatedDate}
              width="200px"
              onChange={({ target }) => {
                console.log(target.value);
              }}
            />
          </Box>
        </Flex>
        <Flex ml="20px" gap="10px" alignItems="flex-start">
          <Icon.PencilIcon color="primary.200" />
          <Textarea
            padding="5px"
            width="500px"
            value={data.description ? data.description : "No Description"}
            onChange={({ target }) => {
              console.log(target.value);
            }}
            border="none"
            _focus={{
              border: "0.5px solid",
              borderColor: "primary.300",
              outline: "none",
              boxShadow: "none",
            }}
          />
        </Flex>
      </Flex>
    </Collapse>
  );
};

export default function CardTask(props) {
  const { isOpen, onToggle } = useDisclosure();
  const { data } = props;

  const handleCheck = () => {
    // setData({ ...data, checked: !data.checked });
    console.log(data.checked);
  };

  return (
    <Flex
      width="100%"
      direction="column"
      borderBottom="1px solid"
      borderColor="primary.300"
      padding="20px"
    >
      <HeaderCardTask
        data={data}
        handleCheck={handleCheck}
        onToggle={onToggle}
        isOpen={isOpen}
      />
      <ContentCardTask data={data} isOpen={isOpen} />
    </Flex>
  );
}
