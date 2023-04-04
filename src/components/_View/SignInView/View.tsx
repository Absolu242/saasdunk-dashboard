import {
  Box,
  Grid,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Radio,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { colors } from "../../../theme/colors";

export function SignInView() {
  return (
    <Grid w="100%" height={"100vh"} gridTemplateColumns="1fr 1.5fr">
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems="center"
        alignContent="center"
        width={"100%"}
        height="100%"
        padding={"4rem 0"}
      >
        <Box marginTop={"10rem"}>
          <Flex>
            <img src="/logoImg.svg" alt="logo" />
            <Text
              paddingLeft={".8rem"}
              color={colors.blue1}
              fontSize="2.2rem"
            >
              <strong>SaaS</strong>dunk.
            </Text>
          </Flex>
          <Text
            color={colors.text.main}
            fontWeight={"700"}
            fontSize={"2.6rem"}
            padding="1rem 0 3.4rem 0"
          >
            Welcome Back !
          </Text>
          <Box>
            <FormControl>
              <FormLabel
                fontSize={"1.2rem"}
                fontWeight="700"
                color={colors.text.tertiary}
                textTransform="uppercase"
                paddingBottom={"1.9rem"}
                margin={"0"}
              >
                Email
              </FormLabel>
              <Input
                borderRadius={"10px"}
                fontSize={"1.6rem"}
                placeholder="saas@dunk.com"
                padding={"2rem 1rem"}
                type="email"
              />
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize={"1.2rem"}
                fontWeight="700"
                color={colors.text.tertiary}
                textTransform="uppercase"
                padding={"1.6rem 0 1.9rem 0"}
                margin={"0"}
              >
                Password
              </FormLabel>
              <Input
                borderRadius={"10px"}
                fontSize={"1.6rem"}
                padding={"2rem 1rem"}
                placeholder="insert your password "
                type={"password"}
              />
            </FormControl>

            <Box padding={"2.8rem 0 3.2rem 0 "}>
              <Radio value="admin">
                <Text
                  fontSize={"1.6rem"}
                  fontWeight="500"
                  color={colors.text.secondary}
                >
                  Remember me
                </Text>
              </Radio>
            </Box>
          </Box>

          <Button
            borderRadius={"8px"}
            fontWeight={"500"}
            padding="2rem"
            fontSize={"1.6rem"}
            bg={colors.blue2}
            color={colors.white}
            width="301px"
            textTransform="uppercase"
          >
            Sign in
          </Button>

          <Flex justifyContent={"end"} paddingTop="2.4rem">
            <Text color={colors.blue2} fontSize="1.4rem">
              Forgot Password?
            </Text>
          </Flex>
        </Box>

        <Box justifySelf={"end"}>
          <Text fontSize={"1.4rem"}>
            Dont have account?{" "}
            <span
              style={{
                color: colors.blue2,
              }}
            >
              <Link to="/signup">Register</Link>
            </span>
          </Text>
        </Box>
      </Flex>
      <Flex
        bg={colors.blue1}
        width={"100%"}
        alignContent="center"
        alignItems={"center"}
        justifyContent={"center"}
        position="relative"
        maxHeight={"100vh"}
      >
        <Box>
          <Image
            margin={"2rem 0rem 0rem 13rem "}
            src="img.svg"
            width={"70%"}
          />
        </Box>
        <Box position={"absolute"} marginTop="40%">
          <Text
            padding={"8.2rem 0 1.2rem 0"}
            fontWeight={"bold"}
            color={colors.white}
            fontSize="2.6rem"
          >
            Connect and manage with your team!
          </Text>
          <Text
            textAlign={"center"}
            maxWidth={"45rem"}
            color={colors.white}
            fontSize="1.4rem"
          >
            Aziest Jordan is one of the biggest superstars to have
            immerged from the professional designer in world.
          </Text>
        </Box>
      </Flex>
    </Grid>
  );
}
