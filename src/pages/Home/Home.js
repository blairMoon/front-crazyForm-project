import React from 'react';

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
} from '@chakra-ui/react';

function HomePage() {
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
        <Box bg="gray.100" w="100%" h="200px" mb="4">
          <Flex align="center" justify="center" h="100%">
            <Box textAlign="center">
              <Heading size="2xl">Learn new skills online</Heading>
              <Text fontSize="lg" mt="4">
                Explore courses on business, technology, personal development,
                and more.
              </Text>
              <Button mt="6" colorScheme="blue" size="lg">
                Get started
              </Button>
            </Box>
          </Flex>
        </Box>

        <Box maxW="1000px" w="100%" mb="8">
          <Heading size="lg" mb="4">
            Popular courses
          </Heading>
          <Container as={Stack} maxW={'6xl'} py={10}>
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 4 }}
              spacing={8}
              align={'flex-start'}
            >
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
            </SimpleGrid>
          </Container>
        </Box>

        <Box maxW="1000px" w="100%">
          <Heading size="lg" mb="4">
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

export default HomePage;
