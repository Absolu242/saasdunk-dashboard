import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Box,
  Text,
  Avatar,
  Flex,
} from "@chakra-ui/react";

import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { colors } from "../../styles/colors";

export function UserCard({ user }: any) {
  return (
    <Box
      height="230px"
      bg={colors.white}
      borderRadius="10px"
      _hover={{
        cursor: 'pointer',
        boxShadow:
          " 0 2px 5px 0 rgba(255, 255, 255, 0.115), 0 2px 10px 0#ffffff21)",
      }}
    >
      <Flex justifyContent={"end"} alignItems="flex-end">
        {" "}
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<BiDotsVerticalRounded />}
            color={colors.text.secondary}
            fontSize="1.8rem"
            paddingTop={"1rem"}
            variant="none"
          />
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Box justifyContent={"center"} textAlign="center">
        <Avatar
          width="56px"
          height="56px"
          //size={"lg"}
          name="Firefly"
          src={user.profilePicture}
        />{" "}
        <Box padding={"2rem 0"}>
          <Text fontSize={"1.6rem"} color={colors.text.main}>
            {user.name}
          </Text>
          <Text fontSize={"1.2rem"} color={colors.text.secondary}>
            {user.email}
          </Text>
        </Box>
        <Button
          fontSize={"1.4rem"}
          borderColor={colors.blue2}
          variant="outline"
          color={colors.blue2}
          padding={"1.5rem 2rem"}
          borderRadius="8px"
          _hover={{
            color: colors.white,
            backgroundColor: colors.blue2,
          }}
        >
          Message
        </Button>
      </Box>
    </Box>
  );
}
