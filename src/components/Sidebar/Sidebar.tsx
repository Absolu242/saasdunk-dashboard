import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { TbSettings } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import {
  sidebarCom,
  sidebarMain,
  sidebarPages,
} from "../../constants/sidebar-menu";

import { colors } from "../../theme/colors";

export function Sidebar() {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <Box
      className="sidebar-scrollbar"
      bg={colors.white}
      paddingBottom="2.9rem"
      height={"100vh"}
      style={{
        overflowY: "auto",
        scrollbarWidth: "thin",
        position: "fixed",
        width: "100%",
        maxWidth: "23.4rem",
      }}
    >
      <Box
        paddingTop="2.9rem"
        width={"100%"}
        height={"100%"}
        maxHeight={"8.2rem"}
        style={{
          borderBottom: `1px solid ${colors.bg2}`,
          borderRight: `1px solid ${colors.bg2}`,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Text color={colors.blue1} fontSize="2.2rem">
          <strong>SaaS</strong>dunk.
          {/*  <Logo /> */}
        </Text>
      </Box>
      <Box
        style={{
          height: "100%",
        }}
      >
        <Box>
          <Text
            fontSize={"1.2rem"}
            color={colors.text.tertiary}
            style={{
              padding: "4rem 0 0rem 2.6rem",
              marginBottom: "1.3rem",
            }}
          >
            <strong>{sidebarMain.title}</strong>
          </Text>
          {sidebarMain.items.map((item) => (
            <Link to={item.url}>
              <Flex
                className={
                  item.url === currentUrl ? "activeTab" : ""
                }
                style={{
                  padding: "1.8rem 0",
                  paddingLeft: "2.2rem",
                  width: "100%",
                  maxWidth: "21.8rem",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  alignItems: "center",
                  maxHeight: "5.9rem",
                }}
              >
                <Icon
                  fontSize={"2.4rem"}
                  as={item.icon}
                  color={
                    item.url === currentUrl
                      ? colors.blue1
                      : colors.text.secondary
                  }
                />
                <Text
                  color={
                    item.url === currentUrl
                      ? colors.blue1
                      : colors.text.secondary
                  }
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
            style={{
              padding: "2.4rem 0 0rem 2.6rem",
              marginBottom: "1.5rem",
            }}
          >
            <strong>{sidebarCom.title}</strong>
          </Text>
          {sidebarCom.items.map((item) => (
            <Link to={item.url}>
              <Flex
                className={
                  item.url === currentUrl ? "activeTab" : ""
                }
                style={{
                  padding: "1.8rem 0",
                  paddingLeft: "2.2rem",
                  width: "100%",
                  maxWidth: "21.8rem",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  alignItems: "center",
                  maxHeight: "5.9rem",
                }}
              >
                <Icon
                  fontSize={"2.2rem"}
                  as={item.icon}
                  color={
                    item.url === currentUrl
                      ? colors.blue1
                      : colors.text.secondary
                  }
                />
                <Text
                  color={
                    item.url === currentUrl
                      ? colors.blue1
                      : colors.text.secondary
                  }
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
            style={{
              padding: "2.4rem 0 0rem 2.6rem",
              marginBottom: "1.5rem",
            }}
          >
            <strong>{sidebarPages.title}</strong>
          </Text>
          {sidebarPages.items.map((item) => (
            <Link to={item.url}>
              <Flex
                className={
                  item.url === currentUrl ? "activeTab" : ""
                }
                style={{
                  padding: "1.8rem 0",
                  paddingLeft: "2.2rem",
                  width: "100%",
                  maxWidth: "21.8rem",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  alignItems: "center",
                  maxHeight: "5.9rem",
                }}
              >
                <Icon
                  fontSize={"2.2rem"}
                  as={item.icon}
                  color={
                    item.url === currentUrl
                      ? colors.blue1
                      : colors.text.secondary
                  }
                />
                <Text
                  color={
                    item.url === currentUrl
                      ? colors.blue1
                      : colors.text.secondary
                  }
                  fontSize={"1.8rem"}
                  paddingInline={".9rem"}
                >
                  {item.name}
                </Text>
              </Flex>
            </Link>
          ))}
        </Box>

        <Link to="/settings">
          <Flex
            className={
              "/settings" === currentUrl ? "activeTab" : ""
            }
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
              as={TbSettings}
              color={
                "/settings" === currentUrl
                  ? colors.blue1
                  : colors.text.secondary
              }
            />
            <Text
              color={
                "/settings" === currentUrl
                  ? colors.blue1
                  : colors.text.secondary
              }
              fontSize={"1.8rem"}
              paddingInline={".9rem"}
            >
              Settings
            </Text>
          </Flex>
        </Link>
      </Box>
    </Box>
  );
}
