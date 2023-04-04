import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../../theme/colors";

export function ComingSoonView() {
  return (
    <Box>
      <Box bg={colors.white} padding={"2.4rem"}>
        <Text
          color={colors.text.main}
          fontSize={"2.2rem"}
          fontWeight={"bold"}
        >
          Coming Soon
        </Text>
      </Box>
    </Box>
  );
}
