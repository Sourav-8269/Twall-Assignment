import {
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import AddTask from "./AddTask";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      position="fixed"
      zIndex="999"
      top="0"
      w="100%"
      h="60px"
      px="50px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      //  bg={useColorModeValue('gray.100', 'gray.900')}
      bg={colorMode === "light" ? "#03a9f4" : "rgb(33,33,33)"}
    >
      <Link style={{ textDecoration: "none" }} w="100%" textAlign="left">
        <Text
          cursor="pointer"
          display={["block", "block", "block"]}
          fontFamily="sans-serif"
          fontSize={["25px", "30px"]}
          color={colorMode == "light" ? "#1A202C" : "#DD6B20"}
        >
          Task Planner
        </Text>
      </Link>
      <Box display="flex" width="50%" justifyContent="flex-end">
        <AddTask />
        <Button onClick={toggleColorMode} ml="4%">
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Box>
    </Box>
  );
}
export default Navbar;
