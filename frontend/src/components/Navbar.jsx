import {
  Container,
  Text,
  Flex,
  Button,
  HStack,
  useColorMode,
} from "@chakra-ui/react";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // ✅ Fix colorMode

  return (
    <Container maxW={"1140px"} px="4">
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, #7928CA,rgb(42, 9, 192))"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}> 
            {colorMode === "light" ? <IoMoon size="20" /> : <LuSun size="20" />}
          </Button>

          <Link to={"/cart"}>
            <Button>
              <FaShoppingCart fontSize={20} />
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
