import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue, } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaMoon, FaPlusSquare, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"}  mb={10}>
      <Flex
        h={"60px"}
        py={'10px'}
        px={'16px'}
        borderRadius={"12px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "26", md: "32" }}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.500, blue.600)"}
          bgClip={"text"}
          cursor={"pointer"}
        >
          <Link to="/">Product Store</Link>
        </Text>

        <HStack spacing={1} mt={{ base: "4", sm: "0" }}>
          <Link to="/create">
            <Button>
              <FaPlusSquare />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};
export default Navbar;
