import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Home.module.scss';
import { FaHtml5, FaReact, FaMobile } from 'react-icons/fa';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getLectureRate } from '../../api';
import { SiSpring } from 'react-icons/si';
import LectureCard from '../../components/LectureCard/LectureCard';
import ReviewCard from '../../components/BestReviews/BestReviews';
import StarRating from '../../components/LectureCard/StarRating';
import {
  Flex,
  Link,
  Button,
  Heading,
  Text,
  Box,
  Image,
  Container,
  Stack,
  SimpleGrid,
  CardBody,
  Card,
  VStack,
  HStack,
} from '@chakra-ui/react';

function Home() {
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  const { isLoading, data } = useQuery(['lectureInfo'], () => getLectureRate());

  if (data) {
    // console.log(data);
    return (
      <>
        <Flex direction="column" align="center" h="100%">
          <VStack align="center" h="100%">
            <Box w="100%" h="100%" pt={14} mt={3}>
              <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={4000}
                style={{ height: '100%' }}
              >
                <Box>
                  <Image
                    src="https://img.freepik.com/free-vector/gradient-isometric-laptop-technology-background_52683-4502.jpg?w=1060&t=st=1678866285~exp=1678866885~hmac=0917b38dfe1c84eefb8c9be6eeb723b39619c4cdb06affcde4b083d1307b1944"
                    alt="Carousel slide 1"
                    objectFit="cover"
                    width="100%"
                    height="500px"
                  />
                </Box>
                <Box>
                  <Image
                    src="https://img.freepik.com/free-vector/gradient-isometric-laptop-technology-background_52683-4502.jpg?w=1060&t=st=1678866285~exp=1678866885~hmac=0917b38dfe1c84eefb8c9be6eeb723b39619c4cdb06affcde4b083d1307b1944"
                    alt="Carousel slide 2"
                    objectFit="cover"
                    width="100%"
                    height="500px"
                  />
                </Box>
                <Box>
                  <Image
                    src="https://img.freepik.com/free-vector/gradient-isometric-laptop-technology-background_52683-4502.jpg?w=1060&t=st=1678866285~exp=1678866885~hmac=0917b38dfe1c84eefb8c9be6eeb723b39619c4cdb06affcde4b083d1307b1944"
                    alt="Carousel slide 3"
                    objectFit="cover"
                    width="100%"
                    height="500px"
                  />
                </Box>
              </Carousel>
            </Box>
          </VStack>

          <Flex>
            <Box w="100%" h="550px" textAlign="center">
              <Heading size="lg" mb="4" mt="7">
                POPULAR CLASS
              </Heading>
              <Container as={Stack} maxW={'6xl'} py={10} mb={10}>
                <Carousel
                  showThumbs={false}
                  showIndicators={false}
                  showArrows={true}
                  autoPlay={true}
                  infiniteLoop={true}
                  interval={4000}
                  // autoPlay={true}
                  // interval={5000}
                  // infiniteLoop={true}
                >
                  <Flex display="flex" justifyContent="space-between" mb={3}>
                    {data?.carousel.slice(0, 4).map(item => (
                      <HStack textAlign={'left'} mb={10} spacing={8}>
                        <LectureCard
                          lectureNumber={item.LectureId}
                          key={item.id}
                          img={item.thumbnail}
                          lectureDescription={item.lectureDescription}
                          lectureTitle={item.lectureTitle}
                          targetAudience={item.targetAudience}
                          instructor={item.instructor.username}
                          rating={item.rating}
                          reviewsNum={item.reviews_num}
                        />
                      </HStack>
                    ))}
                  </Flex>
                  <Flex display="flex" justifyContent="space-between">
                    {data?.carousel.slice(4, 8).map(item => (
                      <HStack textAlign={'left'} mb={10} spacing={8}>
                        <LectureCard
                          lectureNumber={item.LectureId}
                          key={item.id}
                          img={item.thumbnail}
                          lectureDescription={item.lectureDescription}
                          lectureTitle={item.lectureTitle}
                          targetAudience={item.targetAudience}
                          instructor={item.instructor.username}
                          rating={item.rating}
                          reviewsNum={item.reviews_num}
                        />
                      </HStack>
                    ))}
                  </Flex>
                </Carousel>
              </Container>
            </Box>
          </Flex>

          <Box bg="gray.100" w="100%" h="500px" textAlign="center">
            <Heading size="lg" mb="4" mt="10">
              수강항목
            </Heading>

            <Container as={Stack} maxW={'6xl'} py={10}>
              <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
                <Stack align={'center'}>
                  <Link href="/lectures/basic/all/?page=1">
                    <Card
                      width={'250px'}
                      height={'280px'}
                      direction={{ base: 'column' }}
                      variant="outline"
                      borderRadius={20}
                      align={'center'}
                    >
                      <Stack mt={5}>
                        <FaHtml5 size="160" />
                        <CardBody>
                          <Heading size="md" fontSize="17px">
                            기초코딩
                          </Heading>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Link>
                </Stack>
                <Stack align={'center'}>
                  <Link href="/lectures/frontend/all/?page=1">
                    <Card
                      width={'250px'}
                      height={'280px'}
                      direction={{ base: 'column' }}
                      variant="outline"
                      borderRadius={20}
                      align={'center'}
                    >
                      <Stack mt={7}>
                        <FaReact size="150" />
                        <CardBody>
                          <Heading size="md" fontSize="17px">
                            프론트엔드
                          </Heading>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Link>
                </Stack>
                <Stack align={'center'}>
                  <Link href="/lectures/backend/all/?page=1">
                    <Card
                      width={'250px'}
                      height={'280px'}
                      direction={{ base: 'column' }}
                      variant="outline"
                      borderRadius={20}
                      align={'center'}
                    >
                      <Stack mt={10}>
                        <SiSpring size="140" />
                        <CardBody>
                          <Heading size="md" fontSize="17px">
                            백엔드
                          </Heading>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Link>
                </Stack>
                <Stack align={'center'}>
                  <Link href="/lectures/mobile/all/?page=1">
                    <Card
                      width={'250px'}
                      height={'280px'}
                      direction={{ base: 'column' }}
                      variant="outline"
                      borderRadius={20}
                      align={'center'}
                    >
                      <Stack mt={9}>
                        <FaMobile size="150" />
                        <CardBody>
                          <Heading size="md" fontSize="17px">
                            모바일
                          </Heading>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Link>
                </Stack>
              </SimpleGrid>
            </Container>
          </Box>
          <Box bg="white" w="100%" h="800px" textAlign="center">
            <Heading size="lg" mb="4" mt="10">
              수강후기
            </Heading>

            <Container as={Stack} maxW={'6xl'} py={5}>
              <Stack direction={'row'} justify={'center'} spacing={10} mb={10}>
                <Text fontSize="3xl" fontWeight={'bold'}>
                  😊베스트 수강평😊
                </Text>
              </Stack>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {data?.review.map(item => {
                  console.log({ item: item });
                  return (
                    <Stack align="center">
                      <ReviewCard
                        key={item.id}
                        id={item.id}
                        user={item.user.username}
                        contents={item.content}
                        rating={item.rating}
                      />
                    </Stack>
                  );
                })}
              </SimpleGrid>
            </Container>
          </Box>
        </Flex>
      </>
    );
  }
}

export default Home;
