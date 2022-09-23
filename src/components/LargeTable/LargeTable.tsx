import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Avatar,
  Tag,
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { invoicesList } from "../../constants/invoices";
import { colors } from "../../styles/colors";

export function LargeTable() {
  return (
    <>
      <TableContainer>
        <Table variant="unstyled">
          <Thead marginBottom={"1rem"}>
            <Tr>
              <Th>
                <Text
                  fontSize={"1.2rem"}
                  fontWeight="700"
                  paddingBottom={"2rem"}
                  color={colors.text.tertiary}
                >
                  CLIENT
                </Text>
              </Th>
              <Th>
                <Text
                  fontSize={"1.2rem"}
                  fontWeight="700"
                  paddingBottom={"2rem"}
                  color={colors.text.tertiary}
                >
                  AMOUNT
                </Text>
              </Th>
              <Th>
                <Text
                  fontSize={"1.2rem"}
                  fontWeight="700"
                  paddingBottom={"2rem"}
                  color={colors.text.tertiary}
                >
                  STATUS
                </Text>
              </Th>
              <Th>
                <Text
                  fontSize={"1.2rem"}
                  fontWeight="700"
                  paddingBottom={"2rem"}
                  color={colors.text.tertiary}
                >
                  DATE
                </Text>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {invoicesList.map((invoice, i) => (
              <Tr bg={i % 2 === 0 ? colors.white : colors.bg3}
              _hover={{
                backgroundColor: colors.bg2,
                cursor: 'pointer',
                borderLeft:` 2px solid ${colors.blue1}`
              }}
              >
                <Td>
                  <Flex alignItems={"center"}>
                    <Avatar
                      width="56px"
                      height="56px"
                      //size={"lg"}
                      name={invoice.name}
                      src={invoice.profilePicture}
                    />
                    <Box lineHeight={"1rem"} paddingLeft="1rem">
                      <Text color={colors.text.main} fontSize={"1.6rem"}>
                        {invoice.name}v
                      </Text>{" "}
                      <br />{" "}
                      <Text color={colors.text.tertiary} fontSize={"1.4rem"}>
                        {invoice.email}
                      </Text>
                    </Box>
                  </Flex>
                </Td>
                <Td fontSize={"1.4rem"}>{invoice.amount}</Td>
                <Td>
                  <Tag
                    fontSize={"1.4rem"}
                    padding={".3rem 1rem"}
                    color={
                      invoice.status === "paid"
                        ? colors.green1
                        : invoice.status === "billing"
                        ? colors.blue1
                        : colors.text.secondary
                    }
                    backgroundColor={
                      invoice.status === "paid"
                        ? colors.green5
                        : invoice.status === "billing"
                        ? colors.blue5
                        : colors.text.tertiary
                    }
                  >
                    {invoice.status}
                  </Tag>
                </Td>
                <Td fontSize={"1.4rem"}>{invoice.date}</Td>

                <Flex
                marginTop={'2rem'}
                justifyContent={"center"} alignItems="flex-end">
                  {" "}
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<BiDotsVerticalRounded />}
                      color={colors.text.secondary}
                      fontSize="1.8rem"
                      paddingTop={"1rem"}
                      variant="none"
                    />
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Create a Copy</MenuItem>
                      <MenuItem>Mark as Draft</MenuItem>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
