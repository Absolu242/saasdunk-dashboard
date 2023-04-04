import {
  Box,
  Flex,
  Grid,
  GridItem,
  Progress,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  TbArrowWaveRightDown,
  TbArrowWaveRightUp,
} from "react-icons/tb";
import { colors } from "../../../theme/colors";
import { LineChart } from "../../Charts";
import { VerticalBar } from "../../Charts/Verticalbar";

export function HomePageView() {
  return (
    <Box>
      <Box>
        <Text
          fontSize={"2.6rem"}
          fontWeight={"bold"}
          color={colors.text.main}
        >
          Dashboard{" "}
        </Text>

        <Text fontSize={"1.6rem"} color={colors.text.secondary}>
          See your data visualization from{" "}
          <span
            style={{
              color: colors.blue2,
            }}
          >
            27 Feb - 3 Apr{" "}
          </span>
        </Text>
      </Box>

      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={"2.5rem"}
        margin={"3.7rem 0 2.5rem 0"}
      >
        <GridItem
          borderRadius={"10px"}
          padding={"2.4rem"}
          width="271px"
          height="147px"
          bg={colors.white}
          boxShadow={"0px 2px 4px rgba(28,41,90,0.04)"}
        >
          <Text
            fontFamily={"Inter"}
            color={colors.text.secondary}
            fontSize={"1.6rem"}
          >
            Realtime Users
          </Text>
          <Box>
            <Box>
              <Text
                fontSize={"3.2rem"}
                fontWeight={"bold"}
                color={colors.text.main}
              >
                553
              </Text>
              <Box
                fontSize={"1.4rem"}
                color={colors.green2}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Text>+21.01%</Text>{" "}
                <TbArrowWaveRightUp
                  fontSize={"1.8rem"}
                  color={colors.green2}
                />
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem
          borderRadius={"10px"}
          padding={"2.4rem"}
          width="271px"
          height="147px"
          bg={colors.white}
          boxShadow={"0px 2px 4px rgba(28,41,90,0.04)"}
        >
          <Text color={colors.text.secondary} fontSize={"1.6rem"}>
            Total Visits
          </Text>
          <Box>
            <Box>
              <Text
                fontSize={"3.2rem"}
                fontWeight={"bold"}
                color={colors.text.main}
              >
                32.123
              </Text>
              <Box
                fontSize={"1.4rem"}
                color={colors.green2}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Text>+10.01%</Text>{" "}
                <TbArrowWaveRightUp
                  fontSize={"1.8rem"}
                  color={colors.green2}
                />
              </Box>
            </Box>
          </Box>
        </GridItem>

        <GridItem
          borderRadius={"10px"}
          padding={"2.4rem"}
          width="271px"
          height="147px"
          bg={colors.white}
          boxShadow={"0px 2px 4px rgba(28,41,90,0.04)"}
        >
          <Text color={colors.text.secondary} fontSize={"1.6rem"}>
            Visit Duration
          </Text>
          <Box>
            <Box>
              <Text
                fontSize={"3.2rem"}
                fontWeight={"bold"}
                color={colors.text.main}
              >
                1m 8s
              </Text>

              <Box
                fontSize={"1.4rem"}
                color={colors.red2}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Text>-12.01%</Text>{" "}
                <TbArrowWaveRightDown
                  fontSize={"1.8rem"}
                  color={colors.red2}
                />
              </Box>
            </Box>
          </Box>
        </GridItem>

        <GridItem
          borderRadius={"10px"}
          padding={"2.4rem"}
          width="271px"
          height="147px"
          bg={colors.white}
          boxShadow={"0px 2px 4px rgba(28,41,90,0.04)"}
          gridColumn={"4/ span 4"}
        >
          <Text color={colors.text.secondary} fontSize={"1.6rem"}>
            Bounce Rate
          </Text>
          <Box>
            <Box>
              <Text
                fontSize={"3.2rem"}
                fontWeight={"bold"}
                color={colors.text.main}
              >
                21.2
              </Text>
              <Box
                fontSize={"1.4rem"}
                color={colors.green2}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Text>+21.01%</Text>{" "}
                <TbArrowWaveRightUp
                  fontSize={"1.8rem"}
                  color={colors.green2}
                />
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>

      <Box>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gridTemplateRows={"230px 355px auto "}
          gap={"25px"}
          gridAutoRows="auto"
          height={"100vh"}
        >
          <GridItem
            width={"862px"}
            height="512px"
            boxShadow={"0px 2px 4px rgba(28,41,90,0.04)"}
          >
            <Box
              bg={colors.white}
              padding={"2.4rem"}
              borderRadius="10px"
            >
              <Flex justifyContent={"space-between"}>
                <Box>
                  <Text
                    fontSize={"2.2rem"}
                    fontWeight={"bold"}
                    color={colors.text.main}
                  >
                    Marketing{" "}
                  </Text>

                  <Text
                    fontSize={"1.6rem"}
                    color={colors.text.secondary}
                  >
                    See your marketing fluctuative
                  </Text>
                </Box>
                <Select
                  height={"4.2rem"}
                  width={"16.2rem"}
                  borderRadius={"10px"}
                  variant="filled"
                  placeholder="New Visitor"
                  bg={colors.bg3}
                  color={colors.text.main}
                  fontSize={"1.4rem"}
                >
                  <option value="new-visitor">New Visitor</option>
                  <option value="new-customer">New Customer</option>
                  <option value="reach">Reach</option>
                </Select>
              </Flex>
              <Flex padding={"2.4rem 0 2.4rem 4.4rem"}>
                <Box>
                  <Text
                    fontSize={"1.4rem"}
                    color={colors.text.secondary}
                  >
                    {" "}
                    New Visitor
                  </Text>
                  <Flex paddingRight={"3rem"}>
                    <Text
                      fontSize={"2.2rem"}
                      fontWeight={"bold"}
                      color={colors.text.main}
                    >
                      42
                    </Text>
                    <Box
                      fontSize={"1.4rem"}
                      paddingLeft="1rem"
                      color={colors.green2}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Text>+21.01%</Text>{" "}
                      <TbArrowWaveRightUp
                        fontSize={"1.8rem"}
                        color={colors.green2}
                      />
                    </Box>
                  </Flex>
                </Box>

                <Box>
                  <Text
                    fontSize={"1.4rem"}
                    color={colors.text.secondary}
                  >
                    {" "}
                    New Customer
                  </Text>
                  <Flex paddingRight={"3rem"}>
                    <Text
                      fontSize={"2.2rem"}
                      fontWeight={"bold"}
                      color={colors.text.main}
                    >
                      $41,000
                    </Text>
                    <Box
                      fontSize={"1.4rem"}
                      paddingLeft="1rem"
                      color={colors.green2}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Text>+21.01%</Text>{" "}
                      <TbArrowWaveRightUp
                        fontSize={"1.8rem"}
                        color={colors.green2}
                      />
                    </Box>
                  </Flex>
                </Box>

                <Box>
                  <Text
                    fontSize={"1.4rem"}
                    color={colors.text.secondary}
                  >
                    {" "}
                    Reach
                  </Text>
                  <Flex paddingRight={"3rem"}>
                    <Text
                      fontSize={"2.2rem"}
                      fontWeight={"bold"}
                      color={colors.text.main}
                    >
                      3241
                    </Text>
                    <Box
                      fontSize={"1.4rem"}
                      paddingLeft="1rem"
                      color={colors.red2}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Text>-8.01%</Text>{" "}
                      <TbArrowWaveRightUp
                        fontSize={"1.8rem"}
                        color={colors.red2}
                      />
                    </Box>
                  </Flex>
                </Box>
              </Flex>

              <Box>
                <LineChart />
              </Box>
            </Box>
          </GridItem>

          <GridItem
            width="272px"
            height={"230px"}
            borderRadius="10px"
            bg={colors.white}
            gridColumn={"2/ span 2"}
            boxShadow={"0px 2px 4px rgba(28,41,90,0.04)"}
          >
            <Box
              padding={"2.4rem"}
              borderBottom={`1px solid ${colors.bg2}`}
            >
              <Flex
                justifyContent={"space-between"}
                paddingBottom={"2.4rem"}
              >
                <Text
                  fontWeight={"bold"}
                  color={colors.text.secondary}
                  fontSize="2.2rem"
                >
                  User Report
                </Text>
                <Text
                  fontWeight={"bold"}
                  color={colors.blueberry3}
                  fontSize="1.8rem"
                >
                  67%
                </Text>
              </Flex>
              <Progress
                value={67}
                borderRadius="4px"
                style={{
                  color: "#9390F3",
                }}
              />
            </Box>
            <Flex justifyContent={"space-between"} padding="2.4rem">
              <Box textAlign={"center"}>
                <Text
                  color={colors.text.tertiary}
                  fontSize="1.6rem"
                >
                  Target
                </Text>
                <Text
                  fontWeight={"bold"}
                  color={colors.text.main}
                  fontSize="2.2rem"
                >
                  $4000
                </Text>
              </Box>

              <Box textAlign={"center"}>
                <Text
                  color={colors.text.tertiary}
                  fontSize="1.6rem"
                >
                  Last Month
                </Text>
                <Text
                  fontWeight={"bold"}
                  color={colors.text.main}
                  fontSize="2.2rem"
                >
                  $3800
                </Text>
              </Box>
            </Flex>
          </GridItem>

          <GridItem
            width="272px"
            height={"100%"}
            borderRadius="10px"
            bg={colors.white}
            gridColumn={"2/ span 2"}
            boxShadow={"0px 2px 4px rgba(28,41,90,0.04)"}
          >
            <Box
              padding={"2.4rem "}
              paddingBottom={"0"}
              borderBottom={`1px solid ${colors.bg2}`}
            >
              <Flex
                justifyContent={"space-between"}
                paddingBottom={"2.4rem"}
              >
                <Text
                  fontWeight={"bold"}
                  color={colors.text.secondary}
                  fontSize="2.2rem"
                >
                  Members
                </Text>
              </Flex>
              <Box>
                <VerticalBar />
              </Box>
            </Box>
            <Flex
              justifyContent={"space-between"}
              padding="2.4rem"
              marginTop={"4rem"}
            >
              <Box textAlign={"center"}>
                <Text
                  color={colors.text.tertiary}
                  fontSize="1.6rem"
                >
                  Users
                </Text>
                <Text
                  fontWeight={"bold"}
                  color={colors.text.main}
                  fontSize="2.2rem"
                >
                  3241
                </Text>
              </Box>

              <Box textAlign={"center"}>
                <Text
                  color={colors.text.tertiary}
                  fontSize="1.6rem"
                >
                  VIP
                </Text>
                <Text
                  fontWeight={"bold"}
                  color={colors.text.main}
                  fontSize="2.2rem"
                >
                  2800
                </Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
