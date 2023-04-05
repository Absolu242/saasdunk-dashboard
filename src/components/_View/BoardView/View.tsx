// KanbanBoard.tsx
import { DndContext, rectIntersection } from "@dnd-kit/core";

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { KanbanList } from "../../Kanban";
import { Cards } from "../../../types";
import { colors } from "../../../theme";
import { BsPlusCircle } from "react-icons/bs";

export default function BoardView() {
  const [todoItems, setTodoItems] = useState<Array<Cards>>([]);
  const [doneItems, setDoneItems] = useState<Array<Cards>>([]);
  const [inProgressItems, setInProgressItems] = useState<
    Array<Cards>
  >([]);
  const [uItems, setuItems] = useState<Array<Cards>>([]);

  const [clickedListTitle, setClickedListTitle] =
    useState("Unassigned");

  const addNewCard = (title: string) => {
    if (clickedListTitle === "ToDo") {
      setTodoItems([...todoItems, { title }]);
    } else if (clickedListTitle === "In Progress") {
      setInProgressItems([...inProgressItems, { title }]);
    } else if (clickedListTitle === "Done") {
      setDoneItems([...doneItems, { title }]);
    } else {
      setuItems([...uItems, { title }]);
    }
  };

  //modal's
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  // forms input
  const [cardName, setCardName] = useState("");

  console.log(clickedListTitle);
  return (
    <Box>
      <Flex justifyContent={"space-between"} alignItems="center">
        <Flex alignItems="center">
          <Text
            fontSize={"2.6rem"}
            fontWeight={"bold"}
            color={colors.text.main}
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "5rem",
            }}
          >
            ⭐️ SaasDunk Project
          </Text>

          <Flex alignItems={"center"}>
            <Text
              color={colors.text.icon}
              fontSize={"1.6rem"}
              paddingRight={"1.35rem"}
            >
              Team{" "}
            </Text>
            <AvatarGroup size="md" max={3}>
              <Avatar
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
              />
              <Avatar
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
              <Avatar
                name="Kent Dodds"
                src="https://bit.ly/kent-c-dodds"
              />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
              />
            </AvatarGroup>
          </Flex>
        </Flex>
      </Flex>

      <DndContext
        collisionDetection={rectIntersection}
        onDragEnd={(e) => {
          const container = e.over?.id;
          const title = e.active.data.current?.title ?? "";
          const index = e.active.data.current?.index ?? 0;
          const parent = e.active.data.current?.parent ?? "ToDo";
          if (container === "ToDo") {
            setTodoItems([...todoItems, { title }]);
          } else if (container === "Done") {
            setDoneItems([...doneItems, { title }]);
          } else if (container === "Unassigned") {
            setuItems([...uItems, { title }]);
          } else {
            setInProgressItems([...inProgressItems, { title }]);
          }
          if (parent === "ToDo") {
            setTodoItems([
              ...todoItems.slice(0, index),
              ...todoItems.slice(index + 1),
            ]);
          } else if (parent === "Done") {
            setDoneItems([
              ...doneItems.slice(0, index),
              ...doneItems.slice(index + 1),
            ]);
          } else if (parent === "Unassigned") {
            setuItems([
              ...uItems.slice(0, index),
              ...uItems.slice(index + 1),
            ]);
          } else {
            setInProgressItems([
              ...inProgressItems.slice(0, index),
              ...inProgressItems.slice(index + 1),
            ]);
          }
        }}
      >
        <Flex flexDirection="column" position={"relative"}>
          <Flex
            flex="3"
            className="hidescrollbar"
            style={{
              position: "absolute",
              width: "100%",
              flexWrap: "nowrap",
              overflowX: "auto",
              overflowY: "hidden",
              whiteSpace: "nowrap",
              top: "3rem",
            }}
          >
            <KanbanList
              title="Unassigned"
              items={uItems}
              onOpen={onOpen}
              setClickedListTitle={setClickedListTitle}
            />
            <KanbanList
              title="ToDo"
              items={todoItems}
              onOpen={onOpen}
              setClickedListTitle={setClickedListTitle}
            />
            <KanbanList
              title="In Progress"
              items={inProgressItems}
              onOpen={onOpen}
              setClickedListTitle={setClickedListTitle}
            />
            <KanbanList
              title="Done"
              items={doneItems}
              onOpen={onOpen}
              setClickedListTitle={setClickedListTitle}
            />
            <Button
              borderRadius={"10px"}
              marginLeft="1rem"
              fontWeight={"500"}
              padding="2rem"
              fontSize={"1.6rem"}
              color={colors.blue2}
              minW="208px"
              style={{
                border: `1px solid ${colors.blue2}`,
              }}

              //onClick={onOpen}
            >
              Add List
            </Button>
          </Flex>
        </Flex>
      </DndContext>

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
            Add Card
          </ModalHeader>
          <ModalCloseButton
            fontSize={"1.7rem"}
            fontWeight="400"
            color={colors.text.icon}
            margin="3.8rem 3.2rem"
          />
          <ModalBody padding={"3.2rem  3.2rem 0 3.2rem"}>
            <FormControl>
              <FormLabel
                fontSize={"1.2rem"}
                fontWeight="700"
                color={colors.text.tertiary}
                textTransform="uppercase"
                paddingBottom={"1.9rem"}
                margin={"0"}
              >
                Card Name
              </FormLabel>
              <Input
                borderRadius={"10px"}
                fontSize={"1.6rem"}
                ref={initialRef}
                placeholder="Write here..."
                padding={"2rem 1rem"}
                w="225px"
                onChange={(e) => setCardName(e.target.value)}
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
                Due Date
              </FormLabel>
              <Input
                borderRadius={"10px"}
                fontSize={"1.6rem"}
                ref={initialRef}
                padding={"2rem 1rem"}
                placeholder="Last name"
                type={"date"}
                w="269px"
                color={colors.text.icon}
              />
            </FormControl>

            <Flex
              maxW={"400px"}
              justifyContent={"space-between"}
              align={"center"}
            >
              <FormControl>
                <FormLabel
                  fontSize={"1.2rem"}
                  fontWeight="700"
                  color={colors.text.tertiary}
                  textTransform="uppercase"
                  padding={"1.9rem 0"}
                  margin={"0"}
                >
                  Team
                </FormLabel>
                <Flex align={"center"}>
                  <AvatarGroup
                    size="md"
                    max={3}
                    paddingRight="1rem"
                  >
                    <Avatar
                      name="Ryan Florence"
                      src="https://bit.ly/ryan-florence"
                      w={"36px"}
                      h={"36px"}
                    />
                    <Avatar
                      name="Segun Adebayo"
                      src="https://bit.ly/sage-adebayo"
                      w={"36px"}
                      h={"36px"}
                    />
                    <Avatar
                      name="Kent Dodds"
                      src="https://bit.ly/kent-c-dodds"
                      w={"36px"}
                      h={"36px"}
                    />
                    <Avatar
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                      w={"36px"}
                      h={"36px"}
                    />
                    <Avatar
                      name="Christian Nwamba"
                      src="https://bit.ly/code-beast"
                      w={"36px"}
                      h={"36px"}
                    />
                  </AvatarGroup>
                  <BsPlusCircle
                    fontSize={"2.5rem"}
                    color={colors.text.icon}
                  />
                </Flex>
              </FormControl>

              <Box paddingTop={"2.4rem"}>
                <Text
                  fontSize={"1.2rem"}
                  fontWeight="700"
                  color={colors.text.tertiary}
                  textTransform="uppercase"
                  paddingBottom={"1rem"}
                >
                  Labels
                </Text>
                <Flex align={"center"}>
                  <Tag
                    size={"lg"}
                    borderRadius="md"
                    variant="solid"
                    colorScheme="green"
                    marginRight={"1rem"}
                    minW="100px"
                  >
                    <TagLabel>Green Label</TagLabel>
                    <TagCloseButton />
                  </Tag>
                  <BsPlusCircle
                    fontSize={"2.5rem"}
                    color={colors.text.icon}
                  />
                </Flex>
              </Box>
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
                Description
              </FormLabel>
              <Textarea
                height={"8.5rem"}
                placeholder="Here is a sample placeholder"
                borderRadius={"1rem"}
                fontSize={"1.5rem"}
                bg={colors.bg3}
              />
            </FormControl>
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
              onClick={() => {
                addNewCard(cardName);
                onClose();
              }}
            >
              Add Card
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>

    // <KanbanTest />
  );
}
