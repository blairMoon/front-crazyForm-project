import React from 'react';

import {
  VStack,
  HStack,
  Box,
  Textarea,
  Button,
  FormControl,
} from '@chakra-ui/react';

import StarRating from '../../components/LectureCard/StarRating';

const ReviewForm = () => {
  return (
    <form>
      <HStack fontWeight="600">
        <Box fontSize="22px">수강평</Box>
        <Box color="#A6A6A6">총 119개</Box>
      </HStack>
      <Box py="4">수강생분들이 직접 작성하신 수강평입니다.</Box>
      <FormControl id="review">
        <HStack h="200px" fontWeight="600" spacing={2} mb="2">
          <VStack
            w="40%"
            h="100%"
            border="1px solid #DCDCDC"
            rounded="5"
            justifyContent="center"
          >
            <Box fontSize="40px">3.8</Box>
            <Box fontSize="24px">
              <StarRating rating={3.8} />
            </Box>
            <Box color="#A6A6A6">119개의 수강평</Box>
          </VStack>
          <VStack
            w="60%"
            h="100%"
            border="1px solid #DCDCDC"
            rounded="5"
            justifyContent="center"
          >
            <Box fontSize="36px">
              <StarRating rating={0} />
            </Box>
            <Box fontSize="14px">별점을 선택해주세요</Box>
          </VStack>
        </HStack>
        <HStack
          border="1px solid #DCDCDC"
          px="4"
          py="4"
          bg="rgba(238,238,238,0.3)"
          rounded="5"
        >
          <Box maxH="100px" overflowY="auto" w="100%" h="100%">
            <Textarea
              focusBorderColor="green.400"
              placeholder="좋은 수강평을 남겨주시면 배우는 사람들에게 큰 도움이 됩니다!(5자이상)"
              max="1000"
              min="5"
              h="100px"
              bg="white"
              resize="none"
            />
          </Box>
          <Button
            type="submit"
            colorScheme="whatsapp"
            width="100px"
            height="100px"
          >
            댓글 쓰기
          </Button>
        </HStack>
      </FormControl>
    </form>
  );
};

export default ReviewForm;
