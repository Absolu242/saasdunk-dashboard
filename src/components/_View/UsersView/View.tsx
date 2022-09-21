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
import { colors } from "../../../styles/colors";
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
                color={layout === "grid" ? colors.blue2 : colors.text.secondary}
              />
            </Button>
            <Button
              cursor={"pointer"}
              variant={"none"}
              onClick={() => setLayout("list")}
            >
              <TiThListOutline
                fontSize={"1.6rem"}
                color={layout === "list" ? colors.blue2 : colors.text.secondary}
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
          gridGap="2rem"
          padding={"3rem 0"}
        >
          {usersList.map((user, i) => (
            <UserCard user={user} key={i} />
          ))}
        </Grid>
      )}

      {layout === "list" && (
        <Box padding={"3rem 0"}>
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
        <ModalContent width="554px" height="677px" padding={"2rem"}>
          <ModalHeader fontWeight={"700"} fontSize={"2.6rem"}>
            Add New
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex alignItems={"center"} paddingBottom="2rem">
              <FaUserCircle color={colors.blue2} size={"30px"} />
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
              >
                First name
              </FormLabel>
              <Input
                borderRadius={"10px"}
                fontSize={"1.6rem"}
                ref={initialRef}
                placeholder="First name"
                padding={"2rem 1rem"}
                margin="1rem 0"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel
                fontSize={"1.2rem"}
                fontWeight="700"
                color={colors.text.tertiary}
                textTransform="uppercase"
              >
                Last name
              </FormLabel>
              <Input
                borderRadius={"10px"}
                fontSize={"1.6rem"}
                ref={initialRef}
                padding={"2rem 1rem"}
                placeholder="Last name"
                margin="1rem 0"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel
                fontSize={"1.2rem"}
                fontWeight="700"
                color={colors.text.tertiary}
                textTransform="uppercase"
              >
                Email
              </FormLabel>
              <Input
                borderRadius={"10px"}
                fontSize={"1.6rem"}
                ref={initialRef}
                padding={"2rem 1rem"}
                placeholder="Email Address"
                margin="1rem 0"
              />
            </FormControl>

            <Box paddingTop={'1rem'}>
              <Text
                fontSize={"1.2rem"}
                fontWeight="700"
                color={colors.text.tertiary}
                textTransform="uppercase"
                paddingBottom={'1rem'}
              >
                Assign a role
              </Text>
              <RadioGroup onChange={setUserRole} value={userRole} defaultValue='user'>
                <Stack spacing={5} direction="row" >
                  <Radio  size='lg' color={colors.blue2} value="admin">
                    Admin
                  </Radio>
                  <Radio fontSize={'2rem'} color={colors.blue2} value="super user">
                    Super User
                  </Radio>
                  <Radio fontSize={'2rem'} color={colors.blue2} value="user">
                    User
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
