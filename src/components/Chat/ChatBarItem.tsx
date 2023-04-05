import { Flex, Box, Avatar, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../theme";

export default function ChatBarItem({
  msg,
  name,
  date,
  is_active,
}: any) {
  const unreadmsg = false;
  return (
    <Flex
      _hover={{
        borderLeft: `2px solid ${colors.blue2}`,
        backgroundColor: colors.bg2,
        cursor: "pointer",
      }}
      padding={"1.6rem 2.4rem 1.6rem 2.4rem "}
      alignItems="center"
      borderLeft={`2px solid ${colors.white}`}
      borderBottom={`1px solid ${colors.bg}`}
    >
      <Avatar
        size={"lg"}
        name="Firefly"
        src="https://bit.ly/dan-abramov"
        width="4.8rem"
        height="4.8rem"
      />

      <Box padding={"0 1.6rem 0 2rem"}>
        <Flex alignItems={"center"}>
          <Text
            fontSize={"1.6rem"}
            color={unreadmsg ? colors.blue2 : colors.text.main}
            fontWeight="500"
          >
            {name}
          </Text>
          {is_active && (
            <Box
              bg={colors.green2}
              borderRadius="50%"
              marginLeft={".8rem"}
              style={{
                position: "relative",
                width: "6px",
                height: "6px",
                top: ".1rem",
              }}
            ></Box>
          )}
        </Flex>
        <Text fontSize={"1.2rem"} color={colors.text.secondary}>
          {msg.length >= 16 ? msg.slice(0, 25).concat("...") : msg}
        </Text>
      </Box>

      <Box
        style={{
          position: "relative",
          marginLeft: "auto",
        }}
      >
        {unreadmsg && (
          <Tag
            fontWeight={"700"}
            size={"lg"}
            variant="solid"
            bg={colors.blue2}
            borderRadius="6px"
            fontSize={"1.1rem"}
            style={{
              position: "relative",
              top: ".2rem",
              marginLeft: "3rem",
            }}
          >
            3
          </Tag>
        )}
        <Text
          fontSize={"1rem"}
          color={colors.text.tertiary}
          top={unreadmsg ? ".8rem" : "1.5rem"}
          style={{
            position: "relative",
            marginLeft: ".5rem",
          }}
        >
          {" "}
          {/* 1 min ago */}
          {date}
        </Text>
      </Box>
    </Flex>
  );
}
