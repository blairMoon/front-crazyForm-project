import { React, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LectureCard from '../../components/LectureCard/LectureCard';
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import css from './WholeLectures.module.scss';
import {
  Box,
  Grid,
  GridItem,
  Input,
  InputGroup,
  Button,
  InputRightAddon,
  Stack,
  HStack,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { getLectureInfo } from '../../api';
import PaginatedItems from './PaginatedItems';

function WholeLectures() {
  const { isLoading, data } = useQuery(['lectureInfo'], getLectureInfo);

  if (data && data.length > 0) {
    return (
      <>
        {console.log(data)}
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
                  variant="outline"
                  placeholder={`전체 강의 검색`}
                />
                <InputRightAddon>
                  <Button>검색</Button>
                </InputRightAddon>
              </InputGroup>
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
            <Grid
              templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
              gap="5"
            >
              {data.map((number, i) => (
                <GridItem key={i}>
                  <LectureCard lectureNumber={i} key={i} />
                </GridItem>
              ))}
            </Grid>
          </GridItem>
        </Grid>

        <GridItem area={'main'} w="800px" mx="auto">
          <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap="5">
            {data.slice(indexOfFirstItem, indexOfLastItem).map((number, i) => (
              <GridItem key={i}>
                <LectureCard lectureNumber={i} key={i} />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
        <GridItem area={'main'} w="800px" mx="auto">
          <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap="5">
            {data.slice(indexOfFirstItem, indexOfLastItem).map((number, i) => (
              <GridItem key={i}>
                <LectureCard lectureNumber={i} key={i} />
              </GridItem>
            ))}
          </Grid>
          <VStack align="center" mt="4">
            <Button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              이전
            </Button>
            <HStack>
              {Array.from({ length: totalPages }).map((_, i) => (
                <Button
                  key={i}
                  isActive={currentPage === i + 1}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
            </HStack>
            <Button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              다음
            </Button>
          </VStack>
        </GridItem>

        <Footer />
      </>
    );
  } else {
    return null; // or return no data state
  }
}

export default WholeLectures;
