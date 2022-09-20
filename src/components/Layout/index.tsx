import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../styles/colors";
import { Sidebar } from "../Sidebar";
import { TopBar } from "../TopBar";

type MainLayoutProps = {
  children: any;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Container >
       <Flex>
       <Sidebar />
        <Box bg={colors.bg}>
          <TopBar />
          <Box>{children}</Box>
        </Box>
       </Flex>
      </Container>
    </>
  );
};
