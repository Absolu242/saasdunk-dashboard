import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
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
      <Container maxWidth={'100%'} padding='0'>
        <Grid gridTemplateColumns={"234px 1fr"}>
          <GridItem>
            <Sidebar />
          </GridItem>
          <GridItem>
            <Box bg={colors.bg} height='100%'>
              <TopBar />
              <Box padding={"3rem 2rem"}>{children}</Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};
