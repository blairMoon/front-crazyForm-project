import React from 'react';
import { useParams } from 'react-router-dom';
import {
  QueryClient,
  useQuery,
  useQueryClient,
  useMutation,
} from '@tanstack/react-query';
import { getLectureDetail, postReview, postReply } from '../../api';

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

  const queryClient = useQueryClient();

  const { mutate, isLoading: isSubmitting } = useMutation(
    postReview,
    postReply,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['lectureInfo']);
      },
    }
  );

  const {
    register,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm();

  // const onSubmit = async data => {
  //   try {
  //     await mutate(
  //       { lectureNum: data.LectureId, data },
  //       {
  //         isLoading: true,
  //       }
  //     );
  //     reset();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  if (data) {
    {
      console.log('data:', data);
    }
    return (
      <>
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
                  <Box>{data.categories.parent.name}</Box>
                  <Box fontSize="24">{data.lectureTitle}</Box>
                  <Box pb="8">
                    <FontAwesomeIcon icon={faChalkboardTeacher} />
                    &nbsp;{data.instructor.username}
                  </Box>
                  <Box>
                    <StarRating rating={data.rating} /> ({data.rating})
                  </Box>
                  <Box>{data.reviews_num}개의 수강평 ∙ 4088명의 수강생</Box>
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
              <ReviewForm
                reviewsNum={data.reviews_num}
                ratingScore={data.rating}
                lectureNum={data.LectureId}
                // onSubmit={onSubmit}
                isSubmitting={isSubmitting}
              />
              <Box fontSize="18px" fontWeight="600" pt="10">
                Reviews
              </Box>
              <Divider borderColor="black.500" pt="3" />
              <Box pt="3"></Box>
              {data.reviews?.reverse().map(review => (
                <Review
                  key={review.id}
                  username={review.user.username}
                  rating={review.rating}
                  content={review.content}
                  created_at={review.created_at.slice(0, 10)}
                  reply={review.reply}
                  lectureNum={data.LectureId}
                  reviewNum={review.id}
                />
              ))}
            </Stack>
          </GridItem>
        </Grid>
        <StartButton />
      </>
    );
  }
};
export default DetailLecture;
