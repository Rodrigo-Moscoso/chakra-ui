import React from "react";
import { Button, Center, Heading, HStack, VStack } from "@chakra-ui/react";

export default function Header() {
  return (
    <Center mt="5">
      <VStack
        boxSize="80%"
        h="sm"
        borderColor="black"
        borderWidth="2px"
        justify="center"
        spacing="3%"
        backgroundImage="https://cdn.pixabay.com/photo/2021/12/09/11/47/river-6858013_960_720.jpg"
      >
        <Heading as="h1" textAlign="center" w="100%" textColor="whiteAlpha.700">
          Domina el Terreno
        </Heading>
        <HStack w="100%" justifyContent="center" spacing="5">
          <Button
            textColor="whiteAlpha.900"
            variant="outline"
            borderRadius="0"
            _hover={{ bg: "white", textColor: "black" }}
          >
            Ver Detalle
          </Button>
          <Button
            textColor="whiteAlpha.900"
            variant="outline"
            borderRadius="0"
            _hover={{ bg: "white", textColor: "black" }}
          >
            Ver Video
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
}
