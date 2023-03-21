import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  VStack,
  HStack,
  Box,
  Textarea,
  Button,
  FormControl,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';

import StarRating from '../../components/LectureCard/StarRating';
import StarScore from './StarScore';
import { postReview } from '../../api';

import { useQueryClient, useMutation } from '@tanstack/react-query';

const ReviewForm = ({
  lectureNum,
  reviewsNum,
  ratingScore,
  onSubmit,
  isSubmitting,
}) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(postReview, {
    onSuccess: () => {
      queryClient.invalidateQueries(['lectureInfo']);
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async data => {
    try {
      await mutate({ lectureNum, data });
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <HStack fontWeight="600">
        <Box fontSize="22px">수강평</Box>
        <Box color="#A6A6A6">총 {reviewsNum}개</Box>
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
            <Box fontSize="40px">{ratingScore}</Box>
            <Box fontSize="24px">
              <StarRating rating={ratingScore} />
            </Box>
            <Box color="#A6A6A6">{reviewsNum}개의 수강평</Box>
          </VStack>
          <VStack
            w="60%"
            h="100%"
            border="1px solid #DCDCDC"
            rounded="5"
            justifyContent="center"
          >
            <Box fontSize="36px">
              <Controller
                name="rating"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <StarScore
                    {...field}
                    onRatingChange={value => {
                      setValue('rating', value);
                    }}
                  />
                )}
              />
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
              name="content"
              {...register('content', {
                name: 'content',
                required: true,
                minLength: 5,
              })}
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
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            댓글 쓰기
          </Button>
        </HStack>
      </FormControl>
    </form>
  );
};

export default ReviewForm;
