import { Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";

/**
 * @typedef {{title : String}} LoadingProps
 */

/**
 * @param {LoadingProps} props
 */
function Loading(props) {
  return (
    <Flex
      height="100%"
      width="100%"
      alignItems="center"
      justifyContent="center"
      direction="column"
      gap="15px"
    >
      <Spinner thickness="9px" color="#C4C4C4" size="xl" />
      <Text color="primary.200">{props.title}</Text>
    </Flex>
  );
}

export default Loading;
