import React from "react";
import { VStack, Container, Button, Center, Text } from "@chakra-ui/react";

const Upload = (props: any) => {
  const { file, setFile } = props || {};

  const fileHandler = (e: any) => {
    setFile([...file, e.target.files[0]]);
  };

  return (
    <VStack>
      <Container>
        <Text
          fontWeight="semibold"
          mb="1rem"
          mt="1rem"
          textAlign="center"
          fontSize={["3xl"]}
        >
          Image Gallery
        </Text>
        <Center>
          <input
            type="file"
            accept="image/*"
            onChange={fileHandler}
            style={{ display: "none" }}
            id="image-upload"
          />
          <label htmlFor="image-upload">
            <Button colorScheme="teal" size="lg" marginTop="20px" as="span">
              Upload Image
            </Button>
          </label>
        </Center>
      </Container>
    </VStack>
  );
};

export default Upload;
