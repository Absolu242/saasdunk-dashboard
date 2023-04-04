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
import { colors } from "../../theme/colors";

export function UserRow({ user, index }: any) {
  return (
    <Flex
      maxWidth={"1158px"}
      width="100%"
      justifyContent={"space-between"}
      alignItems="center"
      bg={colors.white}
      padding={"2rem"}
      borderTopLeftRadius={index === 0 ? "10px" : "0px"}
      borderTopRightRadius={index === 0 ? "10px" : "0px"}
      style={{
        borderBottom: `1px solid ${colors.bg2}`,
      }}
    >
      <Flex alignItems={"center"}>
        <Avatar
          width="56px"
          height="56px"
          //size={"lg"}
          name="Firefly"
          src={user.profilePicture}
        />{" "}
        <Box paddingLeft={"1rem"}>
          <Text fontSize={"1.6rem"} color={colors.text.main}>
            {user.name}
          </Text>
          <Text fontSize={"1.2rem"} color={colors.text.secondary}>
            {user.email}
          </Text>
        </Box>
      </Flex>

      <Flex>
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
    </Flex>
  );
}
