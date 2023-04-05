import {
  Box,
  Flex,
  Avatar,
  IconButton,
  Button,
  Card,
  CardHeader,
  Text,
  CardBody,
  Image,
  CardFooter,
  AvatarGroup,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { BiComment } from "react-icons/bi";
import { GrAttachment } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
import { colors } from "../../theme";

const date = new Date();

const currentDate = date.toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});
export const KanbanCard = ({
  title,
  index,
  parent,
}: {
  title: string;
  index: number;
  parent: string;
}) => {
  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({
      id: title,
      data: {
        title,
        index,
        parent,
      },
    });

  console.log(CSS.Translate.toString(transform));

  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <Flex
      padding="2.4rem 1.4rem"
      backgroundColor="white"
      borderRadius="10px"
      boxShadow="0px 2px 4px rgba(28,41,90,0.04)"
      transform={style.transform}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      maxW={"296px"}
      minW={"296px"}
    >
      <Card
        maxW="md"
        style={{
          boxShadow: "none",
        }}
      >
        <CardHeader paddingTop={"0"}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={"1.2rem"}>{currentDate}</Text>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              fontSize={"1.2rem"}
              icon={
                <BsThreeDotsVertical color={colors.text.icon} />
              }
            />
          </Flex>
        </CardHeader>

        <Image
          borderRadius="6px"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
        />
        <CardBody>
          <Text>{title}</Text>
          <Tag
            size={"lg"}
            borderRadius="md"
            variant="solid"
            colorScheme="pink"
            marginTop={"1rem"}
            width="auto"
          >
            <TagLabel>Design</TagLabel>
            <TagCloseButton />
          </Tag>
        </CardBody>
        <CardFooter
          justify="space-between"
          alignItems={"center"}
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
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

          <Box>
            <Button
              flex="1"
              variant="ghost"
              leftIcon={
                <BiComment
                  color={colors.text.icon}
                  fontSize={"20"}
                />
              }
            >
              3
            </Button>
            <Button
              flex="1"
              variant="ghost"
              leftIcon={
                <GrAttachment
                  color={colors.text.icon}
                  fontSize={"20"}
                />
              }
            >
              1
            </Button>
          </Box>
        </CardFooter>
      </Card>
    </Flex>
  );
};
