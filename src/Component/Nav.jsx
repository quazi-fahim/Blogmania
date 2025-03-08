import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Box bg="black" color="white" py={4} px={6} width="100%" position="sticky" top="0" zIndex="1000">
      <Flex justify="center" align="center" position="relative">
        {/* Contact Us Button - Top Right */}
        <Button
          position="absolute"
          top="50%"
          right={{ base: "8px", md: "16px" }} // Adjust button placement
          transform="translateY(-50%)"
          bg="white"
          color="black"
          _hover={{ bg: "gray.300" }}
          onClick={() => navigate("/contactus")}
          size={{ base: "sm", md: "md" }}
        >
          Contact Us
        </Button>

        {/* Blog Title - Clickable */}
        <Text
          fontSize={{ base: "lg", md: "2xl" }}
          fontWeight="bold"
          cursor="pointer"
          _hover={{ textDecoration: "underline", color: "gray.300" }}
          onClick={() => navigate("/bloglist")}
          textAlign="center"
        >
          BlogMania
        </Text>
      </Flex>
    </Box>
  );
};

export default Nav;
