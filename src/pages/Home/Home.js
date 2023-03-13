import React from 'react';
import CaptionCarousel from '../../components/Carousel/Carousel';
import css from './Home.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
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
            <Box textAlign="left">
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

        <Box bg="gray.100" w="100%" h="400px" textAlign="center">
          <Heading size="lg" mb="4" mt="5">
            POPULAR CLASS
          </Heading>
          <Container as={Stack} maxW={'6xl'} py={10}>
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 4 }}
              spacing={8}
              align={'flex-start'}
            >
              <Stack align={'center'}>
                <ListHeader>강의</ListHeader>
                <Link href={'/lectures'}>관열이와 아이들</Link>
                <Stack direction={'row'} align={'center'} spacing={2}>
                  <Link href={'#'}>관열이와 아이들</Link>
                </Stack>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
              <Stack align={'center'}>
                <ListHeader>소개</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
              <Stack align={'center'}>
                <ListHeader>로드맵</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
              <Stack align={'center'}>
                <ListHeader>커뮤니티</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>

        <Box bg="gray.100" w="100%" h="400px" textAlign="center">
          <Heading size="lg" mb="4" mt="5">
            Featured instructors
          </Heading>

          <Container as={Stack} maxW={'6xl'} py={10}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
              <Stack align={'center'}>
                <ListHeader>강의</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Stack direction={'row'} align={'center'} spacing={2}>
                  <Link href={'#'}>관열이와 아이들</Link>
                  {/* <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}
              >
                New
              </Tag> */}
                </Stack>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
              <Stack align={'center'}>
                <ListHeader>소개</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
              <Stack align={'center'}>
                <ListHeader>로드맵</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
              <Stack align={'center'}>
                <ListHeader>커뮤니티</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
              <Stack align={'center'}>
                <ListHeader>커뮤니티</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
        <Box bg="gray.100" w="100%" h="400px" textAlign="center">
          <Heading size="lg" mb="4" mt="5">
            Featured instructors
          </Heading>

          <Container as={Stack} maxW={'6xl'} py={10}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
              <Stack align={'center'}>
                <ListHeader>강의</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Stack direction={'row'} align={'center'} spacing={2}>
                  <Link href={'#'}>관열이와 아이들</Link>
                  {/* <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}
              >
                New
              </Tag> */}
                </Stack>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
              <Stack align={'center'}>
                <ListHeader>소개</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
              <Stack align={'center'}>
                <ListHeader>로드맵</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
              <Stack align={'center'}>
                <ListHeader>커뮤니티</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
              <Stack align={'center'}>
                <ListHeader>커뮤니티</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
        <Box bg="gray.100" w="100%" h="400px" textAlign="center">
          <Heading size="lg" mb="4" mt="5">
            Featured instructors
          </Heading>

          <Container as={Stack} maxW={'6xl'} py={10}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
              <Stack align={'center'}>
                <ListHeader>강의</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Stack direction={'row'} align={'center'} spacing={2}>
                  <Link href={'#'}>관열이와 아이들</Link>
                  {/* <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}
              >
                New
              </Tag> */}
                </Stack>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
              <Stack align={'center'}>
                <ListHeader>소개</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
              <Stack align={'center'}>
                <ListHeader>로드맵</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
              <Stack align={'center'}>
                <ListHeader>커뮤니티</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
              </Stack>
              <Stack align={'center'}>
                <ListHeader>커뮤니티</ListHeader>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
                <Link href={'#'}>관열이와 아이들</Link>
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
