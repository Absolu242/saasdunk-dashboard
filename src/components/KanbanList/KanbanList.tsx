import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/core";
import { BsThreeDots } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { colors } from "../../theme";
import { Cards } from "../../types";
import { KanbanCard } from "../Cards";

interface KanbanListProps {
  title: string;
  items: Cards[];
  onOpen: () => void;
  setClickedListTitle: any;
}

export function KanbanList({
  title,
  items,
  onOpen,
  setClickedListTitle,
}: KanbanListProps) {
  const { setNodeRef } = useDroppable({
    id: title,
  });

  return (
    <Flex flex="3" padding="5" flexDirection="column" minH="10rem">
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        style={{
          borderBottom: `1px solid #9aa6ce`,
          paddingBottom: "1.75rem",
          marginBottom: "2.35rem",
        }}
      >
        <Text
          fontWeight="bold"
          color={colors.text.icon}
          fontSize={"1.8rem"}
        >
          {title}
        </Text>
        <IconButton
          variant="ghost"
          colorScheme="gray"
          aria-label="See menu"
          fontSize={"1.5rem"}
          icon={<BsThreeDots color={colors.text.icon} />}
        />
      </Flex>
      <Flex
        ref={setNodeRef}
        // backgroundColor="gray.200"
        borderRadius="8"
        flex="1"
        flexDirection="column"
        width={"100%"}
        maxW={"296px"}
      >
        {items.map(({ title: cardTitle }, key) => (
          <Box paddingBottom="1rem">
            <KanbanCard
              title={cardTitle}
              key={key}
              index={key}
              parent={title}
            />
          </Box>
        ))}
        <Button
          padding="3"
          backgroundColor="white"
          borderRadius="8"
          boxShadow="0px 2px 4px rgba(28,41,90,0.04)"
          minW={"296px"}
          width={"100%"}
          minH={"50px"}
          bg="white"
          alignItems="center"
          onClick={() => {
            onOpen();
            setClickedListTitle(title);
          }}
        >
          <Text
            fontSize={"1.6rem"}
            style={{
              display: "flex",
              alignItems: "center",
            }}
            color={colors.text.icon}
          >
            <FiPlus /> ADD CARD
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}
