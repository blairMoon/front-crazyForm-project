import React from 'react';
import { useParams } from 'react-router-dom';
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import { getLectureDetail } from '../../api';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import StarRating from '../../components/LectureCard/StarRating';
import Review from '../../components/Reviews/Review';
import ReviewForm from '../../components/Reviews/ReviewForm';

import {
  faChalkboardTeacher,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import { BsShare } from 'react-icons/bs';
import { RiHomeHeartLine } from 'react-icons/ri';

import {
  Grid,
  GridItem,
  HStack,
  Box,
  Image,
  VStack,
  Stack,
  Button,
  Input,
  Textarea,
  FormControl,
  Divider,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StartButton from '../../components/Button/StartButton';
// import QnaButton from '../../components/Button/QnaButton';

import { useForm } from 'react-hook-form';

const DetailLecture = () => {
  let { id } = useParams();
  const { isLoading, data } = useQuery(['lectureInfo'], () =>
    getLectureDetail(id)
  );
  if (data) {
    {
      console.log('data:', data);
    }
    return (
      <>
        <Header />
        <Grid
          w="1300px"
          pt="20"
          pb="10"
          px="4"
          gap="1"
          mx="auto"
          templateAreas={`"info"
                  "contents"
                  "reviews"`}
        >
          <GridItem
            bg="gray.50"
            h="400px"
            area={'info'}
            px="20"
            py="10"
            fontWeight="bold"
            color="gray.600"
          >
            <HStack h="100%">
              <Box w="45%" borderRadius="full">
                <Image
                  src="https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/thumb-course-phthon-basic.jpg"
                  alt="lecture image"
                  borderRadius="10px"
                  objectFit="cover"
                />
              </Box>
              <Box w="10%"></Box>
              <Box w="45%">
                <Stack h="100%" spacing={3}>
                  <Box>카테고리</Box>
                  <Box fontSize="24">오뚜니의 파이썬 강의</Box>
                  <Box pb="8">
                    <FontAwesomeIcon icon={faChalkboardTeacher} />
                    &nbsp;뚜니코딩
                  </Box>
                  <Box>
                    <StarRating rating={3.7} /> (3.7)
                  </Box>
                  <Box>119개의 수강평 ∙ 4088명의 수강생</Box>
                  <Box>
                    <Stack direction="row" spacing={4}>
                      <Button colorScheme="black" variant="outline" w="150px">
                        <RiHomeHeartLine size={20} /> &nbsp;&nbsp;수강하기
                      </Button>
                      <Button colorScheme="black" variant="outline" w="150px">
                        <BsShare /> &nbsp;&nbsp;공유하기
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </HStack>
          </GridItem>
          <GridItem area={'contents'}>contents</GridItem>
          <GridItem
            area={'reviews'}
            px="20"
            py="10"
            display="flex"
            justifyContent="center"
          >
            <Stack w="800px">
              <ReviewForm />
              <Box fontSize="18px" fontWeight="600" pt="10">
                Reviews
              </Box>
              <Divider borderColor="black.500" pt="3" />
              <Box pt="3"></Box>
              <Review />
              <Review />
              <Review />
            </Stack>
          </GridItem>
        </Grid>
        <StartButton />
        <Footer />
      </>
    );
  }
};
export default DetailLecture;
