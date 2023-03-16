import React from 'react';

import { RiHomeHeartLine } from 'react-icons/ri';

import { HStack, Box, Flex } from '@chakra-ui/react';

const QnaButton = () => {
  return (
    <Flex
      align="center"
      position="fixed"
      bottom={4}
      right={4}
      w="165px"
      h="75px"
      boxShadow="1px 1px 10px rgba(0, 0, 0, 0.1)"
      rounded="50"
      bg="white"
      justifyContent="center"
      fontSize="md"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="100%"
        w="55%"
        fontWeight="bold"
      >
        문의하기
      </Box>
      <HStack
        bg="green.300"
        rounded="100"
        h="100%"
        w="45%"
        justifyContent="center"
      >
        <RiHomeHeartLine style={{ color: 'white' }} size={70} />
      </HStack>
    </Flex>
  );
};

export default QnaButton;
