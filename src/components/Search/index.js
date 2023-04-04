import React from "react";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { Icon } from "../../assets";

export default function index() {
  return (
    <InputGroup size="sm">
      <Input
        padding="0 58px"
        placeholder="Search"
        _placeholder={{ color: "#333333" }}
        width="100%"
        size="sm"
        borderRadius="5px"
        borderColor="primary.300"
      />
      <InputRightElement marginRight="58px" children={<Icon.SearchIcon />} />
    </InputGroup>
  );
}
