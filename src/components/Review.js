import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import "../App.css";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Circle,
} from "@chakra-ui/layout";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import data from "./Data";

const Review = () => {
  const [index, setIndex] = useState(0);

  console.log(data);
  let { name, job, image, text } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const leftHandlerClick = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const rightHandlerClick = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <Box textAlign="center" m="10" boxShadow="dark-lg" borderRadius="5">
      <Box m="5">
        <Circle
          size="40px"
          bg="#49a6e9"
          color="white"
          ml="190"
          ml="auto"
          mr="auto"
          className="icon"
        >
          <FaQuoteRight />
        </Circle>

        <Image
          // mt="5"
          src={image}
          alt={name}
          h="150px"
          w="150px"
          ml="auto"
          mr="auto"
          objectFit="cover"
          borderRadius="50%"
        />
      </Box>
      <Heading as="h6" size="sm" mt="5" textTransform="capitalize">
        {name}
      </Heading>
      <Text mt="1" textTransform="uppercase" color="#63B3ED">
        {job}
      </Text>
      <Text mt="5" mr="50" ml="50" color="grey">
        {text}
      </Text>
      <Stack display="inline-block" color="#49a6e9" mt="3">
        <Button
          leftIcon={<FaChevronLeft />}
          variant="outline"
          border="none"
          w="35%"
          mt="2"
          onClick={() => leftHandlerClick(index)}
        ></Button>
        <Button
          rightIcon={<FaChevronRight />}
          variant="outline"
          border="none"
          onClick={() => rightHandlerClick(index)}
          w="35%"
        ></Button>
      </Stack>
      <br />
      <Button
        size="sm"
        variant="outline"
        color="#49a6e9"
        mb="5"
        bg="##eaf8ff"
        mt="3"
        onClick={() => randomPerson()}
      >
        Surprise Me
      </Button>
    </Box>
  );
};

export default Review;
