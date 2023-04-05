import { Box, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { ImAttachment } from "react-icons/im";
import InputEmoji from "react-input-emoji";

import { colors } from "../../theme";

export function ChatFooter() {
  const [text, setText] = useState("");

  function handleOnEnter(text: string) {
    console.log("enter", text);
  }

  return (
    <Flex
      bg={colors.white}
      position="absolute"
      bottom="0"
      height="8.2rem"
      width="100%"
      borderBottomRadius={"1rem"}
      align="center"
      padding={"0 2.4rem"}
    >
      <Box paddingRight={"1rem"}>
        <label htmlFor="file-input">
          <ImAttachment color={colors.text.icon} fontSize={"20"} />
        </label>

        <Input display={"none"} id="file-input" type="file" />
      </Box>

      <InputEmoji
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnter={handleOnEnter}
        placeholder="Type your message"
        borderRadius="10px"
        fontFamily="Inter"
      />
    </Flex>
  );
}
