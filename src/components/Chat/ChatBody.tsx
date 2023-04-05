import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { TiStarOutline } from "react-icons/ti";
import { colors } from "../../theme";

export function ChatBody() {
  const user = {
    name: "Absolu Bouess",
    is_active: true,
  };
  return (
    <Box bg={colors.bg2} height="100%">
      <Flex
        padding={"1.6rem 2.4rem "}
        bg={colors.white}
        borderTopRadius={"1rem"}
        alignItems={"center"}
      >
        <Flex alignItems={"center"}>
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
                color={colors.text.main}
                fontWeight="500"
              >
                {user.name}
              </Text>
              {user.is_active && (
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
          </Box>
        </Flex>

        <Flex marginLeft={"auto"}>
          <FiSearch color={colors.text.tertiary} size={"2.2rem"} />
          <Box paddingLeft={"1.4rem"}>
            <TiStarOutline
              color={colors.text.tertiary}
              size={"2.2rem"}
            />
          </Box>
        </Flex>
      </Flex>
      <Box
        style={{
          maxWidth: "92%",
          margin: "24px auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          style={{
            alignSelf: "flex-end",
          }}
        >
          <Text className="text-chat send">Bonjour</Text>
          <Text
            marginLeft={"6rem"}
            fontSize={"1rem"}
            color={colors.text.tertiary}
          >
            21:40
          </Text>
        </Box>
        <Flex
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Box paddingRight={"2rem"} zIndex="1">
            <Avatar
              size={"lg"}
              name="Firefly"
              src="https://bit.ly/dan-abramov"
              width="4.2rem"
              height="4.2rem"
            />
          </Box>
          <Box>
            <Text className="text-chat receive">
              bonjour, Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Labore voluptatibus aspernatur
              dolores perferendis incidunt laborum beatae delectus,
              commodi obcaecati, repellat mollitia velit laboriosam
              vero illum magni sequi fuga. Dolorum, deleniti.
            </Text>
            <Text fontSize={"1rem"} color={colors.text.tertiary}>
              4 min ago
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
