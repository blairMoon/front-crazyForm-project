import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Home.module.scss';
import { FaHtml5, FaReact, FaMobile } from 'react-icons/fa';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getLectureInfoTest } from '../../api';
import { SiSpring } from 'react-icons/si';
import {
  Flex,
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
  AspectRatio,
  Center,
} from '@chakra-ui/react';

function Home() {
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };

  return (
    <>
      <Flex direction="column" align="center" h="100%">
        <VStack align="center" h="100%">
          <Box w="100%" h="100%" pt={12} mt={2}>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={5000}
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
          <Box w="100%" h="500px" textAlign="center">
            <Heading size="lg" mb="4" mt="7">
              POPULAR CLASS
            </Heading>
            <Container as={Stack} maxW={'6xl'} py={10} mb={10}>
              <Carousel
                showThumbs={false}
                showIndicators={true}
                showArrows={true}
              >
                <SimpleGrid
                  columns={{ base: 1, sm: 2, md: 4 }}
                  spacing={8}
                  align={'flex-start'}
                  mb={10}
                >
                  <Stack align={'center'}>
                    <ListHeader>강의</ListHeader>
                    <Card
                      width={'250px'}
                      height={'250px'}
                      direction={{ base: 'column' }}
                      variant="outline"
                      borderRadius={10}
                    >
                      <Image
                        objectFit="cover"
                        maxW={{ base: '100%', sm: '100%' }}
                        src="http://images.khan.co.kr/article/2021/04/24/l_2021042402001358100229521.jpg"
                        alt="Caffe Latte"
                      />
                      <Stack>
                        <CardBody>
                          <Heading size="md" fontSize="17px">
                            김수람의 파이썬강의
                          </Heading>
                          <Text py="2">람람이</Text>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Stack>
                  <Stack align={'center'}>
                    <ListHeader>소개</ListHeader>
                    <Card
                      width={'250px'}
                      height={'250px'}
                      direction={{ base: 'column' }}
                      variant="outline"
                      borderRadius={10}
                    >
                      <Image
                        objectFit="cover"
                        maxW={{ base: '100%', sm: '100%' }}
                        src="http://images.khan.co.kr/article/2021/04/24/l_2021042402001358100229521.jpg"
                        alt="Caffe Latte"
                      />
                      <Stack>
                        <CardBody>
                          <Heading size="md" fontSize="17px">
                            김수람의 파이썬강의
                          </Heading>
                          <Text py="2">람람이</Text>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Stack>
                  <Stack align={'center'}>
                    <ListHeader>로드맵</ListHeader>
                    <Card
                      width={'250px'}
                      height={'250px'}
                      direction={{ base: 'column' }}
                      variant="outline"
                      borderRadius={10}
                    >
                      <Image
                        objectFit="cover"
                        maxW={{ base: '100%', sm: '100%' }}
                        src="http://images.khan.co.kr/article/2021/04/24/l_2021042402001358100229521.jpg"
                        alt="Caffe Latte"
                      />
                      <Stack>
                        <CardBody>
                          <Heading size="md" fontSize="17px">
                            김수람의 파이썬강의
                          </Heading>
                          <Text py="2">람람이</Text>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Stack>
                  <Stack align={'center'}>
                    <ListHeader>커뮤니티</ListHeader>
                    <Card
                      width={'250px'}
                      height={'250px'}
                      direction={{ base: 'column' }}
                      variant="outline"
                    >
                      <Image
                        objectFit="cover"
                        maxW={{ base: '100%', sm: '100%' }}
                        src="http://images.khan.co.kr/article/2021/04/24/l_2021042402001358100229521.jpg"
                        alt="Caffe Latte"
                      />
                      <Stack>
                        <CardBody>
                          <Heading size="md" fontSize="17px">
                            김수람의 파이썬강의
                          </Heading>
                          <Text py="2">람람이</Text>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Stack>
                </SimpleGrid>
                <SimpleGrid
                  columns={{ base: 1, sm: 2, md: 4 }}
                  spacing={8}
                  align={'flex-start'}
                >
                  <Stack align={'center'}>
                    <ListHeader>강의</ListHeader>
                    <Card
                      width={'250px'}
                      height={'250px'}
                      direction={{ base: 'column' }}
                      variant="outline"
                      borderRadius={10}
                    >
                      <Image
                        objectFit="cover"
                        maxW={{ base: '100%', sm: '100%' }}
                        src="http://images.khan.co.kr/article/2021/04/24/l_2021042402001358100229521.jpg"
                        alt="Caffe Latte"
                        borderTopRadius={10}
                      />
                      <Stack>
                        <CardBody>
                          <Heading size="md" fontSize="17px">
                            김수람의 파이썬강의
                          </Heading>
                          <Text py="2">람람이</Text>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Stack>
                  <Stack align={'center'}>
                    <ListHeader>소개</ListHeader>
                    <Card
                      width={'250px'}
                      height={'250px'}
                      direction={{ base: 'column' }}
                      variant="outline"
                      borderTopRadius={10}
                    >
                      <Image
                        objectFit="cover"
                        maxW={{ base: '100%', sm: '100%' }}
                        src="http://images.khan.co.kr/article/2021/04/24/l_2021042402001358100229521.jpg"
                        alt="Caffe Latte"
                        borderTopRadius={10}
                      />
                      <Stack>
                        <CardBody>
                          <Heading size="md" fontSize="17px">
                            김수람의 파이썬강의
                          </Heading>
                          <Text py="2">람람이</Text>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Stack>
                  <Stack align={'center'}>
                    <ListHeader>로드맵</ListHeader>
                    <Card
                      width={'250px'}
                      height={'250px'}
                      direction={{ base: 'column' }}
                      variant="outline"
                      borderRadius={10}
                    >
                      <Image
                        objectFit="cover"
                        maxW={{ base: '100%', sm: '100%' }}
                        src="http://images.khan.co.kr/article/2021/04/24/l_2021042402001358100229521.jpg"
                        alt="Caffe Latte"
                        borderTopRadius={10}
                      />
                      <Stack>
                        <CardBody>
                          <Heading size="md" fontSize="17px">
                            김수람의 파이썬강의
                          </Heading>
                          <Text py="2">람람이</Text>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Stack>
                  <Stack align={'center'}>
                    <ListHeader>커뮤니티</ListHeader>
                    <Card
                      width={'250px'}
                      height={'250px'}
                      direction={{ base: 'column' }}
                      variant="outline"
                      borderRadius={10}
                    >
                      <Image
                        objectFit="cover"
                        maxW={{ base: '100%', sm: '100%' }}
                        src="http://images.khan.co.kr/article/2021/04/24/l_2021042402001358100229521.jpg"
                        alt="Caffe Latte"
                        borderTopRadius={10}
                      />
                      <Stack>
                        <CardBody>
                          <Heading size="md" fontSize="17px">
                            김수람의 파이썬강의
                          </Heading>
                          <Text py="2">람람이</Text>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Stack>
                </SimpleGrid>
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
              </Stack>
              <Stack align={'center'}>
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
              </Stack>
              <Stack align={'center'}>
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
              </Stack>
              <Stack align={'center'}>
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
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
        <Box bg="gray.100" w="100%" h="500px" textAlign="center">
          <Heading size="lg" mb="4" mt="10">
            수강후기
          </Heading>

          <Container as={Stack} maxW={'6xl'} py={10}>
            <Stack direction={'row'} justify={'center'} spacing={10} mb={10}>
              <Text fontSize="3xl">우리</Text>
              <Text fontSize="3xl">금쪽이가</Text>
              <Text fontSize="3xl">달라졌어요</Text>
              <Text fontSize="3xl" fontWeight={'bold'}>
                오즈코딩스쿨편
              </Text>
            </Stack>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Stack align={'center'}>
                <Card
                  width={'500px'}
                  height={'200px'}
                  direction={{ base: 'column' }}
                  variant="outline"
                  borderRadius={20}
                >
                  <Stack>
                    <CardBody>
                      <Heading size="md" fontSize="17px">
                        후기1
                      </Heading>
                      <Text py="2">람람이</Text>
                    </CardBody>
                  </Stack>
                </Card>
              </Stack>

              <Stack align={'center'}>
                <Card
                  width={'500px'}
                  height={'200px'}
                  direction={{ base: 'column' }}
                  variant="outline"
                  borderRadius={20}
                >
                  <Stack>
                    <CardBody>
                      <Heading size="md" fontSize="17px">
                        후기2
                      </Heading>
                      <Text py="2">람람이</Text>
                    </CardBody>
                  </Stack>
                </Card>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
      </Flex>
    </>
  );
}

export default Home;
