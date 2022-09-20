import {
  Box,
  Flex,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { AiFillAppstore } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { sidebarCom, sidebarMain, sidebarPages } from "../../constants/sidebar-menu";

import { colors } from "../../styles/colors";

export function Sidebar() {

  const location = useLocation()
  const currentUrl = location.pathname

  
  return (
    <Box bg={colors.white} paddingBottom="2.9rem" height={"100vh"}>
      <Box
        paddingTop="2.9rem"
        paddingInline={"5.3rem"}
        paddingBottom="2.5rem"
        borderBottomColor={colors.text.tertiary}
        borderBottom="2px"
        borderRight={`1px solid ${colors.text.tertiary}`}
      >
        <Text color={colors.blue1} fontSize="2.2rem">
          <strong>SaaS</strong>dunk.
        </Text>
      </Box>
      <Box
        style={{
          borderTop: `1px solid ${colors.text.tertiary}`,
          height: "100%",
        }}
      >
        <Box>
          <Text
            fontSize={"1.4rem"}
            color={colors.text.tertiary}
            style={{ padding: "4rem 0 0rem 2.6rem" , marginBottom: "1.5rem",}}
          >
            <strong>{sidebarMain.title}</strong>
          </Text>
          {sidebarMain.items.map((item) => (
            <Link to={item.url} >
              <Flex
                className={item.url === currentUrl ? "activeTab" : ''}
                style={{
                  padding: "1.8rem 0",
                  paddingLeft: "2.2rem",
                  width: "93%",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  alignItems: "flex-end",
                  
                }}
              >
                <Icon
                  fontSize={"2.2rem"}
                  as={item.icon}
                  color={item.url === currentUrl ? colors.blue1 : colors.text.secondary}
                />
                <Text
                  color={item.url === currentUrl ? colors.blue1 : colors.text.secondary}
                  fontSize={"1.8rem"}
                  paddingInline={".9rem"}
                >
                  {item.name}
                </Text>
              </Flex>
            </Link>
          ))}
        </Box>


        <Box>
          <Text
            fontSize={"1.4rem"}
            color={colors.text.tertiary}
            style={{ padding: "4rem 0 0rem 2.6rem" , marginBottom: "1.5rem",}}
          >
            <strong>{sidebarCom.title}</strong>
          </Text>
          {sidebarCom.items.map((item) => (
            <Link to={item.url}>
              <Flex
                className={item.url === currentUrl ? "activeTab" : ''}
                style={{
                  padding: "1.8rem 0",
                  paddingLeft: "2.2rem",
                  width: "93%",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  alignItems: "flex-end",
                  
                }}
              >
                <Icon
                  fontSize={"2.2rem"}
                  as={item.icon}
                  color={item.url === currentUrl ? colors.blue1 : colors.text.secondary}
                />
                <Text
                  color={item.url === currentUrl ? colors.blue1 : colors.text.secondary}
                  fontSize={"1.8rem"}
                  paddingInline={".9rem"}
                >
                  {item.name}
                </Text>
              </Flex>
            </Link>
          ))}
        </Box>

        <Box>
          <Text
            fontSize={"1.4rem"}
            color={colors.text.tertiary}
            style={{ padding: "4rem 0 0rem 2.6rem" , marginBottom: "1.5rem",}}
          >
            <strong>{sidebarPages.title}</strong>
          </Text>
          {sidebarPages.items.map((item) => (
            <Link to={item.url}>
              <Flex
                className={item.url === currentUrl ? "activeTab" : ''}
                style={{
                  padding: "1.8rem 0",
                  paddingLeft: "2.2rem",
                  width: "93%",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  alignItems: "flex-end",
                  
                }}
              >
                <Icon
                  fontSize={"2.2rem"}
                  as={item.icon}
                  color={item.url === currentUrl ? colors.blue1 : colors.text.secondary}
                />
                <Text
                  color={item.url === currentUrl ? colors.blue1 : colors.text.secondary}
                  fontSize={"1.8rem"}
                  paddingInline={".9rem"}
                >
                  {item.name}
                </Text>
              </Flex>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
