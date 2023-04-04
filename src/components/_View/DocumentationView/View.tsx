import {
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import React from "react";
import { FiSearch } from "react-icons/fi";
import { colors } from "../../../theme";

export function DocumentationView() {
  return (
    <Box>
      <Flex justifyContent={"space-between"} alignItems="center">
        <Box>
          <Text
            fontSize={"2.6rem"}
            fontWeight={"bold"}
            color={colors.text.main}
          >
            Documentation
          </Text>

          <Text fontSize={"1.6rem"} color={colors.text.secondary}>
            Knowledge documentation for all purpose
          </Text>
        </Box>
        <Box>
          <InputGroup
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <InputLeftElement
              pointerEvents="none"
              children={
                <FiSearch
                  color={colors.text.tertiary}
                  size={"1.5rem"}
                />
              }
              h="4.2rem"
              paddingLeft={"1rem"}
            />
            <Input
              borderRadius={"10px"}
              width={"28rem"}
              padding="2rem 3rem"
              fontSize="1.6rem"
              type="tel"
              placeholder="Search..."
              color={colors.text.tertiary}
            />
          </InputGroup>
        </Box>
      </Flex>
    </Box>
  );
}
