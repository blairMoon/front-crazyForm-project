import React from 'react';
import { useState } from 'react';

import {
  Stack,
  HStack,
  VStack,
  Box,
  Flex,
  Divider,
  Avatar,
  Textarea,
  Button,
} from '@chakra-ui/react';

import StarRating from '../LectureCard/StarRating';
import { RiHomeHeartLine } from 'react-icons/ri';

import Reply from './Reply';

const Review = () => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleReplyButtonClick = () => {
    setShowReplyForm(!showReplyForm);
  };

  const handleCancelButtonClick = () => {
    setShowReplyForm(false);
  };

  return (
    <Stack pt="4">
      <Stack>
        <HStack pb="3">
          <Box>
            <Avatar bg="#CED4DA" icon={<RiHomeHeartLine size={35} />} />
          </Box>
          <Stack pl="1" fontWeight="700" spacing={1}>
            <Box>
              <StarRating rating={5} /> 5
            </Box>
            <Box color="#958E96">blairMoon</Box>
          </Stack>
        </HStack>
        <Box>
          오, 저는 너무 만족스러워요 이런 강의를 무료로 들을 수 있어서 정말
          좋습니다. 유료강의임에도 이만큼 재밌게 가르쳐주고 디테일하게
          설명해주는 강의가 많지 않거든요. 저는 유료강의였어도 돈을 지불하고
          들었을 것 같아요. 간만에 즐겁게 강의 들으면서 공부할 수 있었습니다.
          감사합니다.
        </Box>
        <HStack color="#A6A6A6" fontWeight="600" py="2">
          <Box>2022-06-01</Box>{' '}
          <Button variant="ghost" onClick={handleReplyButtonClick}>
            답글 작성
          </Button>
        </HStack>
      </Stack>
      {showReplyForm && (
        <Stack
          id="reply_form"
          border="1px solid #DCDCDC"
          px="4"
          py="4"
          bg="rgba(238,238,238,0.3)"
          rounded="5"
        >
          <Box fontWeight="700" color="#958E96" fontSize="14">
            지나가는비트위의나그네
          </Box>
          <Box maxH="100px" overflowY="auto" w="100%" h="100%">
            <Textarea
              focusBorderColor="green.400"
              max="1000"
              min="5"
              h="100px"
              bg="white"
              resize="none"
            />
          </Box>
          <HStack justifyContent="end" w="100%">
            <Button
              type="reset"
              colorScheme="white"
              width="50px"
              height="50px"
              color="black"
              onClick={handleCancelButtonClick}
            >
              취소
            </Button>
            <Button
              type="submit"
              colorScheme="whatsapp"
              width="50px"
              height="50px"
            >
              등록
            </Button>
          </HStack>
        </Stack>
      )}
      <Reply />
      <Divider pt="4" />
      <Box pt="2"></Box>
    </Stack>
  );
};

export default Review;
