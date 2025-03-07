import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import MenuLinks from "@/components/MenuLinks";

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={4}
      bg="blue.500"
      color="white"
      {...props}
    >
      {children}
    </Flex>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
