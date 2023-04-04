import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TiThListOutline } from "react-icons/ti";
import { BsGrid } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { colors } from "../../../theme/colors";
import { usersList } from "../../../constants/users";
import { UserCard } from "../../Cards";
import { UserRow } from "../../Rows";

export function UsersView() {
  const [layout, setLayout] = useState("grid");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [userRole, setUserRole] = React.useState("user");

  return (
    <Box>
      <Flex justifyContent={"space-between"} alignItems="center">
        <Text
          fontSize={"2.6rem"}
          fontWeight={"bold"}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Users{" "}
          <Tag
            marginLeft={".5rem"}
            fontWeight={"bold"}
            size={"md"}
            variant="solid"
            bg={colors.blue2}
          >
            68
          </Tag>
        </Text>

        <Flex alignItems={"center"}>
          <Box>
            <Button
              cursor={"pointer"}
              variant={"none"}
              onClick={() => setLayout("grid")}
            >
              <BsGrid
                fontSize={"1.6rem"}
                color={
                  layout === "grid"
                    ? colors.blue2
                    : colors.text.secondary
                }
              />
            </Button>
            <Button
              cursor={"pointer"}
              variant={"none"}
              onClick={() => setLayout("list")}
            >
              <TiThListOutline
                fontSize={"1.6rem"}
                color={
                  layout === "list"
                    ? colors.blue2
                    : colors.text.secondary
                }
              />
            </Button>
          </Box>

          <Button
            borderRadius={"8px"}
            marginLeft="1rem"
            fontWeight={"500"}
            padding="2rem"
            fontSize={"1.6rem"}
            bg={colors.blue2}
            color={colors.white}
            width="208px"
            onClick={onOpen}
          >
            Add New Users
          </Button>
        </Flex>
      </Flex>

      {layout === "grid" && (
        <Grid
          gridTemplateColumns={"1fr 1fr 1fr 1fr"}
          gridGap="2.5rem"
          padding={"3.2rem 0"}
        >
          {usersList.map((user, i) => (
            <UserCard user={user} key={i} />
          ))}
        </Grid>
      )}

      {layout === "list" && (
        <Box padding={"3.2rem 0"}>
          {usersList.map((user, i) => (
            <UserRow user={user} key={i} index={i} />
          ))}
        </Box>
      )}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="554px"
      >
        <ModalOverlay />
        <ModalContent
          borderRadius={"10px"}
          width="554px"
          height="677px"
          padding={"3.2rem 0"}
        >
          <ModalHeader
            color={colors.text.main}
            fontWeight={"700"}
            fontSize={"2.6rem"}
            padding="0 3.2rem"
          >
            Add New
          </ModalHeader>
          <ModalCloseButton
            fontSize={"1.7rem"}
            fontWeight="400"
            color={colors.text.icon}
            margin="3.8rem 3.2rem"
          />
          <ModalBody padding={"3.2rem  3.2rem 0 3.2rem"}>
            <Flex alignItems={"center"} paddingBottom="3.2rem">
              <FaUserCircle color={colors.blue2} size={"56px"} />
              <Button variant="none">
                <Text fontSize={"1.4rem"} color={colors.blue2}>
                  {" "}
                  Add Profile Picture
                </Text>
              </Button>
            </Flex>
            <FormControl>
              <FormLabel
                fontSize={"1.2rem"}
                fontWeight="700"
                color={colors.text.tertiary}
                textTransform="uppercase"
                paddingBottom={"1.9rem"}
                margin={"0"}
              >
                First name
              </FormLabel>
              <Input
                borderRadius={"10px"}
                fontSize={"1.6rem"}
                ref={initialRef}
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
                borderRadius={"10px"}
                fontSize={"1.6rem"}
                ref={initialRef}
                padding={"2rem 1rem"}
                placeholder="Last name"
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
                Email
              </FormLabel>
              <Input
                borderRadius={"10px"}
                fontSize={"1.6rem"}
                ref={initialRef}
                padding={"2rem 1rem"}
                placeholder="Email Address"
              />
            </FormControl>

            <Box paddingTop={"2.4rem"}>
              <Text
                fontSize={"1.2rem"}
                fontWeight="700"
                color={colors.text.tertiary}
                textTransform="uppercase"
                paddingBottom={"1rem"}
              >
                Assign a role
              </Text>
              <RadioGroup
                onChange={setUserRole}
                value={userRole}
                defaultValue="user"
              >
                <Stack spacing={5} direction="row">
                  <Radio value="admin">
                    <Text
                      fontSize={"1.6rem"}
                      fontWeight="500"
                      color={
                        userRole === "admin"
                          ? colors.blue2
                          : colors.text.secondary
                      }
                    >
                      Admin
                    </Text>
                  </Radio>
                  <Radio value="super user">
                    <Text
                      color={
                        userRole === "super user"
                          ? colors.blue2
                          : colors.text.secondary
                      }
                      fontSize={"1.6rem"}
                      fontWeight="500"
                    >
                      {" "}
                      Super User
                    </Text>
                  </Radio>
                  <Radio value="user">
                    <Text
                      color={
                        userRole === "user"
                          ? colors.blue2
                          : colors.text.secondary
                      }
                      fontSize={"1.6rem"}
                      fontWeight="500"
                    >
                      {" "}
                      User
                    </Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </ModalBody>

          <ModalFooter
            borderTop={`1px solid ${colors.bg}`}
            height="12%"
            textAlign={"center"}
            justifyContent="center"
          >
            <Button
              borderRadius={"8px"}
              marginTop="3.2rem"
              fontWeight={"500"}
              padding="2rem"
              fontSize={"1.6rem"}
              bg={colors.blue2}
              color={colors.white}
              width="301px"
            >
              Add and Invite Person
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
