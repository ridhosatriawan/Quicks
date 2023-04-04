import { Icon } from "../../assets";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";

export default function Layout({ children }) {
  return (
    <Flex height="100vh" width="100vw" bg="#333333" overflow="hidden">
      <Box borderRight="1px solid #F2F2F2" color="white" width={285}></Box>
      <Flex direction="column" width="100%">
        <InputGroup>
          <InputLeftElement
            height="58px"
            paddingLeft="10px"
            pointerEvents="none"
            children={<Icon.SearchIcon color="white" />}
          />
          <Input
            height="58px"
            border="none"
            bg="primary.300"
            borderRadius="0"
          />
        </InputGroup>
        <Flex flexGrow="1">{children}</Flex>
      </Flex>
    </Flex>
  );
}
