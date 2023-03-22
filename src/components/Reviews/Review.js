import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

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

import { postReply } from '../../api';

import { useQueryClient, useMutation } from '@tanstack/react-query';

const Review = ({
  username,
  rating,
  content,
  created_at,
  reply,
  lectureNum,
  reviewNum,
}) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [visible, setVisible] = useState(5); // 5개씩 보이도록 설정
  const { register, handleSubmit, reset } = useForm();

  const handleReplyButtonClick = () => {
    setShowReplyForm(!showReplyForm);
  };

  const handleCancelButtonClick = () => {
    setShowReplyForm(false);
  };

  const queryClient = useQueryClient();

  const { mutate } = useMutation(postReply, {
    onSuccess: () => {
      queryClient.invalidateQueries(['lectureInfo']);
    },
  });

  const onSubmit = async data => {
    try {
      await mutate({
        lectureNum,
        reviewNum,
        data,
      }); // postReply API 요청 보내기
      reset(); // 입력 폼을 초기화
      setShowReplyForm(false); // 답글 작성 창을 숨김
    } catch (error) {
      console.error(error);
    }
  };

  // console.log('reply', reply);

  return (
    <Stack pt="4">
      <Stack>
        <HStack pb="3">
          <Box>
            <Avatar bg="#CED4DA" icon={<RiHomeHeartLine size={35} />} />
          </Box>
          <Stack pl="1" fontWeight="700" spacing={1}>
            <Box>
              <StarRating rating={rating} /> {rating}
            </Box>
            <Box color="#958E96">{username}</Box>
          </Stack>
        </HStack>
        <Box>{content}</Box>
        <HStack color="#A6A6A6" fontWeight="600" py="2">
          <Box>{created_at}</Box>{' '}
          <Button variant="ghost" onClick={handleReplyButtonClick}>
            답글 작성
          </Button>
        </HStack>
      </Stack>
      {showReplyForm && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            id="reply_form"
            border="1px solid #DCDCDC"
            px="4"
            py="4"
            bg="rgba(238,238,238,0.3)"
            rounded="5"
          >
            {/* <Box fontWeight="700" color="#958E96" fontSize="14">
              로그인한 유저네임
            </Box> */}
            <Box maxH="100px" overflowY="auto" w="100%" h="100%">
              <Textarea
                name="content"
                {...register('content', { required: true })}
                focusBorderColor="green.400"
                max="1000"
                min="1"
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
        </form>
      )}
      {reply?.map(reply => (
        <Reply
          key={reply.id}
          username={reply.user.username}
          content={reply.content}
          created_at={reply.created_at.slice(0, 10)}
        />
      ))}
      <Divider pt="4" />
      <Box pt="2"></Box>
    </Stack>
  );
};

export default Review;
