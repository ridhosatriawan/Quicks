import { Box, Select, Flex, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Loading } from "../../../../components";
import { useTask } from "../useTask";
import CardTask from "./CardTask";

const TaskBox = (props) => {
  const { task } = useTask();

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
        <Flex direction="column" height="100%">
          <Flex width="100%" justifyContent="space-between" padding="20px">
            <Box marginLeft="95px">
              <Select>
                <option value="my task">My Task</option>
                <option value="my task">To Do List</option>
              </Select>
            </Box>
            <Flex></Flex>
            <Button bg="primary.100"> New Task </Button>
          </Flex>
          <Flex flexGrow="1" width="100%" direction="column" overflow="auto">
            {!task.loading ? (
              task.data?.map((element, index) => (
                <CardTask key={index} data={element} />
              ))
            ) : (
              <Loading title="Loading Task..." />
            )}
          </Flex>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default TaskBox;
