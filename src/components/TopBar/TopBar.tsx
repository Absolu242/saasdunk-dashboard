import {
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Flex,
  Avatar,
  Button,
  MenuDivider,
  MenuGroup,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import React from "react";
import { AiFillBell } from "react-icons/ai";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { colors } from "../../styles/colors";

export function TopBar() {
  return (
    <Flex
      padding={"2.3rem"}
      justifyContent={"space-between"}
      width={"100%"}
      bg="#ffffff"
      alignItems={"center"}
    >
      <Box>
        <InputGroup
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color={colors.text.tertiary} size={"1.5rem"} />}
            h="4.2rem"
            paddingLeft={"1rem"}
          />
          <Input
            borderRadius={"10px"}
            width={"46rem"}
            padding="2rem 3rem"
            fontSize="1.6rem"
            type="tel"
            placeholder="Search..."
            color={colors.text.tertiary}
          />
        </InputGroup>
      </Box>

      <Box experimental_spaceX={"2rem"}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<AiFillBell />}
            variant="none"
            fontSize={"2.5rem"}
            color={colors.text.tertiary}
          />
          <MenuList fontSize={"1.6rem"} width="200px">
            <MenuItem icon={<AiFillBell />}>New Tab</MenuItem>
            <MenuItem icon={<AiFillBell />}>New Window</MenuItem>
            <MenuItem icon={<AiFillBell />}>Open Closed Tab</MenuItem>
            <MenuItem icon={<AiFillBell />}>Open File...</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            alignItems={"center"}
            fontSize={"1.8rem"}
            bg={"transparent"}
            as={Button}
            rightIcon={<FiChevronDown color={colors.text.tertiary} />}
            variant="none"
            color={colors.text.main}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar
                size={"lg"}
                name="Firefly"
                src="https://bit.ly/dan-abramov"
              />{" "}
              <Text paddingLeft={"1rem"}>Firefly Absolu</Text>
            </Box>
          </MenuButton>
          <MenuList fontSize={"1.5rem"} width="200px">
            <MenuGroup fontSize={"1.6rem"} title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup fontSize={"1.6rem"} title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}
