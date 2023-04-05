import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../../theme";
import { ChatBar, ChatBody, ChatFooter } from "../../Chat";

export const ChatView = ({ socket }: any) => {
  return (
    <Box>
      <Box>
        <Text
          fontSize={"2.6rem"}
          fontWeight={"bold"}
          color={colors.text.main}
        >
          Chat
        </Text>
      </Box>

      <Flex marginTop={"3.2rem"}>
        <ChatBar />
        <Box width="100%" marginLeft="2.4rem" position={"relative"}>
          <ChatBody />
          <ChatFooter />
        </Box>
      </Flex>
    </Box>
  );
};
