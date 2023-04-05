import { Box, Button, Flex, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { chats } from "../../data/chat";
import { colors } from "../../theme";
import ChatBarItem from "./ChatBarItem";

export function ChatBar() {
  return (
    <Box
      maxW={"37rem"}
      width="100%"
      bg={colors.white}
      //height={"100%"}
      maxH="71.4rem"
      borderRadius="1rem"
      style={{
        position: "relative",
        boxShadow: "0px 2px 4px rgba(28,41,90,0.04)",
      }}
    >
      <Flex
        padding={"2.4rem"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Text
          fontSize={"2.2rem"}
          fontWeight={"bold"}
          style={{
            display: "flex",
            alignItems: "center",
          }}
          color={colors.text.main}
        >
          Conversation{" "}
          <Tag
            marginLeft={".5rem"}
            fontWeight={"700"}
            size={"lg"}
            variant="solid"
            bg={colors.blue2}
            borderRadius="6px"
            fontSize={"1.1rem"}
            style={{
              position: "relative",
              top: ".2rem",
            }}
          >
            {chats.length}
          </Tag>
        </Text>

        <FiSearch color={colors.text.tertiary} size={"2.2rem"} />
      </Flex>

      <Box
        style={{
          position: "relative",
          height: "75%",
          overflowY: "scroll",
        }}
      >
        <Box
          className="hidescrollbar"
          style={{
            width: "100%",
            overflowX: "hidden",
            overflowY: "scroll",
            height: "100%",
          }}
        >
          {chats.map((chat: any) => (
            <ChatBarItem
              key={chat.profil}
              msg={chat.label}
              name={chat.name}
              date={chat.date}
              is_active={chat.is_active}
            />
          ))}
        </Box>
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3rem",
        }}
      >
        <Button
          borderRadius={"8px"}
          fontWeight={"500"}
          padding="2rem"
          fontSize={"1.6rem"}
          bg={colors.blue2}
          color={colors.white}
          width="32.1rem"
        >
          Create a New Message
        </Button>
      </Box>
    </Box>
  );
}
