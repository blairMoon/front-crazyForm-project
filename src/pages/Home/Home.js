import React from 'react';
import css from './Home.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  Flex,
  Button,
  Heading,
  Text,
  Box,
  Image,
  Container,
  Stack,
  Link,
  ListHeader,
  SimpleGrid,
  IconButton,
  useBreakpointValue,
  CardBody,
  Card,
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
  return (
    <>
      <Header />
      <Flex direction="column" align="center">
        <Box bg="black" w="100%" h="600px">
          <Flex align="center" justify="left" h="100%">
            <Box textAlign="left" ml={20}>
              <Heading size="2xl" color="white">
                온라인 동영상 강의
              </Heading>
              <Text fontSize="lg" mt="4" color="white">
                온라인의 고품질 강의를 만나보세요
              </Text>
              <Button
                mt="6"
                size="lg"
                bg="black"
                border="1px"
                borderColor="white"
                color="white"
              >
                VIEW
              </Button>
            </Box>
          </Flex>
        </Box>

        <Flex>
          <Box w="100%" h="500px" textAlign="center">
            <Heading size="lg" mb="4" mt="7">
              POPULAR CLASS
            </Heading>
            <Container as={Stack} maxW={'6xl'} py={10} mb={10}>
              <Carousel showThumbs={false} showIndicators={true}>
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
              </Carousel>
            </Container>
          </Box>
        </Flex>

        <Box bg="gray.100" w="100%" h="500px" textAlign="center">
          <Heading size="lg" mb="4" mt="10">
            금쪽이
          </Heading>

          <Container as={Stack} maxW={'6xl'} py={10}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              <Stack align={'center'}>
                <ListHeader>강의</ListHeader>
                <Card
                  width={'250px'}
                  height={'280px'}
                  direction={{ base: 'column' }}
                  variant="outline"
                  borderRadius={20}
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: '100%', sm: '100%' }}
                    src="https://thumb.mt.co.kr/06/2021/11/2021112109175268995_1.jpg/dims/optimize/"
                    alt="Caffe Latte"
                    borderTopRadius={20}
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
                  height={'280px'}
                  direction={{ base: 'column' }}
                  variant="outline"
                  borderRadius={20}
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: '100%', sm: '100%' }}
                    src="https://thumb.mt.co.kr/06/2021/11/2021112109175268995_1.jpg/dims/optimize/"
                    alt="Caffe Latte"
                    borderTopRadius={20}
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
                  height={'280px'}
                  direction={{ base: 'column' }}
                  variant="outline"
                  borderRadius={20}
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: '100%', sm: '100%' }}
                    src="https://thumb.mt.co.kr/06/2021/11/2021112109175268995_1.jpg/dims/optimize/"
                    alt="Caffe Latte"
                    borderTopRadius={20}
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
      <Footer />
    </>
  );
}

export default Home;
