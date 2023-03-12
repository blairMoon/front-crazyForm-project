import { React, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LectureCard from '../../components/LectureCard/LectureCard';
<<<<<<< HEAD
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
=======

>>>>>>> 5e4c984c00ba346bbc298db11aed4953a1bff3cb
import css from './WholeLectures.module.scss';
import {
  Box,
  Grid,
  GridItem,
  Input,
  InputGroup,
  Button,
  InputRightAddon,
<<<<<<< HEAD
} from '@chakra-ui/react';
import { getLectureInfo } from '../../api';

function WholeLectures() {
  const { isLoading, data } = useQuery(['lectureInfo'], getLectureInfo);
  // const { lectureData, setLectureData } = useState([]);

  if (data) {
    return (
      <>
        <Header />
        <Box p="5">
          <Box mb="5">
            <InputGroup display={{ base: 'none', md: 'inline-flex' }}>
              <Input
                className="Input"
                pr="10rem"
=======
  Stack,
  HStack,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

function WholeLectures() {
  return (
    <>
      <Header />
      <Grid
        templateAreas={`"nav search"
                  "nav main"`}
        gridTemplateRows={'100px 1fr'}
        gridTemplateColumns={'250px 1fr'}
        // h="800px"
        w="1300px"
        pt="20"
        pb="10"
        px="4"
        gap="1"
        color="black"
        mx="auto"
      >
        <GridItem area={'search'}>
          <HStack justify="space-between">
            <Box w="20%">전체 강의</Box>
            <InputGroup w="30%">
              <Input
                className="Input"
>>>>>>> 5e4c984c00ba346bbc298db11aed4953a1bff3cb
                variant="outline"
                placeholder={`전체 강의 검색`}
              />
              <InputRightAddon>
                <Button>검색</Button>
              </InputRightAddon>
            </InputGroup>
<<<<<<< HEAD
          </Box>
          <Grid templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']} gap="5">
            {data.results.map((number, i) => (
              <GridItem key={i}>
                <LectureCard lectureNumber={i} key={i} />
              </GridItem>
            ))}
          </Grid>
        </Box>
        <Footer />
      </>
    );
  }
=======
          </HStack>
        </GridItem>
        <GridItem w="100%" pr="5" area={'nav'}>
          <Accordion allowToggle color="#585858">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    전체 강의
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>항목1</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    기초 코딩
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>항목2</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    프론트엔드
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>항목1</AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    백엔드
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>항목1</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    모바일
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>항목1</AccordionPanel>
            </AccordionItem>
          </Accordion>
        </GridItem>
        <GridItem area={'main'} w="800px" mx="auto">
          <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap="5">
            {Array.from(Array(9), (_, i) => (
              <GridItem mx="auto" key={i}>
                <LectureCard />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
>>>>>>> 5e4c984c00ba346bbc298db11aed4953a1bff3cb
}

export default WholeLectures;
