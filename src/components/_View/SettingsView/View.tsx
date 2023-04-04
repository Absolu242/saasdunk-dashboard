import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Switch,
  AccordionPanel,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
} from "@chakra-ui/react";
import React from "react";
import { colors } from "../../../theme/colors";

export function SettingsView() {
  return (
    <Box>
      <Text
        fontSize={"2.6rem"}
        fontWeight={"bold"}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        Settings{" "}
      </Text>

      <Box
        bg={colors.white}
        paddingTop="2rem"
        margin={"3rem 0"}
        borderRadius="10px"
      >
        <Box padding="0 2rem">
          <Text fontSize={"2.2rem"} fontWeight={"bold"}>
            Account{" "}
          </Text>
          <Text fontSize={"1.4rem"} color={colors.text.tertiary}>
            This information can be edited from your profile page.{" "}
          </Text>
        </Box>

        <Box marginTop="3.9rem">
          <Box>
            <Accordion allowToggle>
              <AccordionItem
                style={{
                  borderTop: "none",
                }}
              >
                <h2>
                  <AccordionButton
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Flex
                      alignItems={"center"}
                      //  borderBottom={`1px solid ${colors.bg}`}
                      padding="0  0 1rem 2.4rem"
                    >
                      <Avatar
                        width="62px"
                        height="62px"
                        //size={"lg"}
                        name="Firefly"
                      />{" "}
                      <Flex
                        alignItems={"center"}
                        width="100%"
                        justifyContent="space-between"
                      >
                        <Box lineHeight={"2rem"} paddingLeft="1rem">
                          <Text
                            fontSize={"1.6rem"}
                            color={colors.text.main}
                          >
                            Firefly Absolu
                          </Text>
                          <Text
                            fontSize={"1.2rem"}
                            color={colors.text.secondary}
                          >
                            firefly@abso.com
                          </Text>
                        </Box>
                      </Flex>
                    </Flex>
                    <Box>
                      <Button
                        bg={"none"}
                        fontWeight="700"
                        fontSize={"1.4rem"}
                        color={colors.blue2}
                      >
                        Edit Profile
                      </Button>
                      <AccordionIcon
                        width={"24px"}
                        height={"24px"}
                        color={colors.text.secondary}
                      />
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box padding={"2.4rem"}>
                    <FormControl>
                      <FormLabel
                        fontSize={"1.2rem"}
                        fontWeight="700"
                        color={colors.text.tertiary}
                        textTransform="uppercase"
                        padding={"1.9rem 0"}
                        margin={"0"}
                      >
                        Profile picture
                      </FormLabel>
                      <Input
                        borderRadius={"10px"}
                        fontSize={"1.6rem"}
                        placeholder="Choose file"
                        padding={"2rem 1rem"}
                      />
                    </FormControl>

                    <Flex padding={"0 1rem"}>
                      <FormControl>
                        <FormLabel
                          fontSize={"1.2rem"}
                          fontWeight="700"
                          color={colors.text.tertiary}
                          textTransform="uppercase"
                          padding={"1.9rem 0"}
                          margin={"0"}
                        >
                          First name
                        </FormLabel>
                        <Input
                          type={"text"}
                          borderRadius={"10px"}
                          fontSize={"1.6rem"}
                          placeholder="First name"
                          padding={"2rem 1rem"}
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel
                          fontSize={"1.2rem"}
                          fontWeight="700"
                          color={colors.text.tertiary}
                          textTransform="uppercase"
                          padding={"1.9rem 0"}
                          margin={"0"}
                        >
                          Last name
                        </FormLabel>
                        <Input
                          type={"text"}
                          borderRadius={"10px"}
                          fontSize={"1.6rem"}
                          placeholder="Last Name"
                          padding={"2rem 1rem"}
                        />
                      </FormControl>
                    </Flex>

                    <FormControl>
                      <FormLabel
                        fontSize={"1.2rem"}
                        fontWeight="700"
                        color={colors.text.tertiary}
                        textTransform="uppercase"
                        padding={"1.9rem 0"}
                        margin={"0"}
                      >
                        Email
                      </FormLabel>
                      <Input
                        type={"email"}
                        borderRadius={"10px"}
                        fontSize={"1.6rem"}
                        placeholder="email@example.com"
                        padding={"2rem 1rem"}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel
                        fontSize={"1.2rem"}
                        fontWeight="700"
                        color={colors.text.tertiary}
                        textTransform="uppercase"
                        padding={"1.9rem 0"}
                        margin={"0"}
                      >
                        Phone number
                      </FormLabel>
                      <Input
                        type={"tel"}
                        borderRadius={"10px"}
                        fontSize={"1.6rem"}
                        placeholder="your phone number"
                        padding={"2rem 1rem"}
                      />
                    </FormControl>
                    <Flex justifyContent={"end"}>
                      <Button
                        borderRadius={"8px"}
                        marginTop="3.2rem"
                        fontWeight={"500"}
                        padding="2rem"
                        fontSize={"1.6rem"}
                        bg={colors.blue2}
                        color={colors.white}
                        width="229px"
                      >
                        Save and Update
                      </Button>
                    </Flex>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                style={{
                  borderBottom: "none",
                }}
              >
                <h2>
                  <AccordionButton
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      alignContent: "center",
                    }}
                  >
                    <Box
                      padding="2.4rem 0 2rem 3rem"
                      lineHeight={"2rem"}
                    >
                      <Text
                        fontSize={"1.6rem"}
                        color={colors.text.main}
                        textAlign="left"
                      >
                        Change Password
                      </Text>
                      <Text
                        fontSize={"1.2rem"}
                        color={colors.text.secondary}
                      >
                        Forgot your password, find back in seconds
                      </Text>
                    </Box>

                    <Box>
                      <Button
                        bg={"none"}
                        fontWeight="700"
                        fontSize={"1.4rem"}
                        color={colors.blue2}
                      >
                        Update Password
                      </Button>
                      <AccordionIcon
                        width={"24px"}
                        height={"24px"}
                        color={colors.text.secondary}
                      />
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box padding={"2.4rem"}>
                    <FormControl>
                      <FormLabel
                        fontSize={"1.2rem"}
                        fontWeight="700"
                        color={colors.text.tertiary}
                        textTransform="uppercase"
                        padding={"1.9rem 0"}
                        margin={"0"}
                      >
                        old password
                      </FormLabel>
                      <Input
                        borderRadius={"10px"}
                        fontSize={"1.6rem"}
                        placeholder="Insert your old password"
                        padding={"2rem 1rem"}
                        type="password"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel
                        fontSize={"1.2rem"}
                        fontWeight="700"
                        color={colors.text.tertiary}
                        textTransform="uppercase"
                        padding={"1.9rem 0"}
                        margin={"0"}
                      >
                        New Password
                      </FormLabel>
                      <Input
                        type={"email"}
                        borderRadius={"10px"}
                        fontSize={"1.6rem"}
                        placeholder="Insert your new password"
                        padding={"2rem 1rem"}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel
                        fontSize={"1.2rem"}
                        fontWeight="700"
                        color={colors.text.tertiary}
                        textTransform="uppercase"
                        padding={"1.9rem 0"}
                        margin={"0"}
                      >
                        confirm new password
                      </FormLabel>
                      <Input
                        type={"tel"}
                        borderRadius={"10px"}
                        fontSize={"1.6rem"}
                        placeholder="Insert your new password again"
                        padding={"2rem 1rem"}
                      />
                    </FormControl>
                    <Flex justifyContent={"end"}>
                      <Button
                        borderRadius={"8px"}
                        marginTop="3.2rem"
                        fontWeight={"500"}
                        padding="2rem"
                        fontSize={"1.6rem"}
                        bg={colors.blue2}
                        color={colors.white}
                        width="229px"
                      >
                        Update Password
                      </Button>
                    </Flex>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </Box>

      <Box
        bg={colors.white}
        padding="2rem 0"
        margin={"3rem 0"}
        borderRadius="10px"
      >
        <Box padding="0 2rem">
          <Text fontSize={"2.2rem"} fontWeight={"bold"}>
            Notifications
          </Text>
          <Text fontSize={"1.4rem"} color={colors.text.tertiary}>
            Receive notifications, requests to write a review,
            pricing notices, and other reminders related to your
            activities on Building platform.
          </Text>
        </Box>

        <Box>
          <Text
            fontSize={"1.6rem"}
            color={colors.text.secondary}
            fontWeight={"bold"}
            padding={"2.4rem 0"}
            paddingLeft="2.4rem"
          >
            General
          </Text>

          <ul>
            <Flex
              as={"li"}
              justifyContent="space-between"
              padding="1.4rem 2.4rem"
              borderBottom={`1px solid ${colors.bg}`}
            >
              <Text fontSize={"1.4rem"} color={colors.text.main}>
                Anyone follow me
              </Text>{" "}
              <Switch size="lg" />
            </Flex>
            <Flex
              as={"li"}
              justifyContent="space-between"
              padding="1.4rem 2.4rem"
              borderBottom={`1px solid ${colors.bg}`}
            >
              <Text fontSize={"1.4rem"} color={colors.text.main}>
                Anyone send a message
              </Text>{" "}
              <Switch size="lg" />
            </Flex>
            <Flex
              as={"li"}
              justifyContent="space-between"
              padding="1.4rem 2.4rem"
              borderBottom={`1px solid ${colors.bg}`}
            >
              <Text fontSize={"1.4rem"} color={colors.text.main}>
                Anyone seeing my profile page
              </Text>{" "}
              <Switch size="lg" />
            </Flex>
            <Flex
              as={"li"}
              justifyContent="space-between"
              padding="1.4rem 2.4rem"
              borderBottom={`1px solid ${colors.bg}`}
            >
              <Text fontSize={"1.4rem"} color={colors.text.main}>
                Reviews
              </Text>{" "}
              <Switch size="lg" />
            </Flex>
            <Flex
              as={"li"}
              justifyContent="space-between"
              padding="1.4rem 2.4rem"
            >
              <Text fontSize={"1.4rem"} color={colors.text.main}>
                Activity Update
              </Text>{" "}
              <Switch size="lg" />
            </Flex>
          </ul>
        </Box>

        <Box>
          <Text
            fontSize={"1.6rem"}
            color={colors.text.secondary}
            fontWeight={"bold"}
            padding={"2.4rem 0"}
            paddingLeft="2.4rem"
          >
            Email
          </Text>

          <ul>
            <Flex
              as={"li"}
              justifyContent="space-between"
              padding="1.4rem 2.4rem"
              borderBottom={`1px solid ${colors.bg}`}
            >
              <Text fontSize={"1.4rem"} color={colors.text.main}>
                Anyone follow me
              </Text>{" "}
              <Switch size="lg" />
            </Flex>
            <Flex
              as={"li"}
              justifyContent="space-between"
              padding="1.4rem 2.4rem"
            >
              <Text fontSize={"1.4rem"} color={colors.text.main}>
                Anyone repost
              </Text>{" "}
              <Switch size="lg" />
            </Flex>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
