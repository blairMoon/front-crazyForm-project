import { Redirect, React, useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LectureCard from '../../components/LectureCard/LectureCard';
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
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getLectureInfo } from '../../api';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function WholeLectures() {
  const { pageNum } = useParams();
  const navigate = useNavigate();
  // const [currentPage, setCurrentPage] = useState(1);  useEffect(() => {
  // setCurrentPage(pageNum);  }, [pageNum]);
  const [pages, setPages] = useState([]);
  const pageSize = 30;
  const queryClient = useQueryClient();
  const { isLoading, data } = useQuery(['lectureInfo', pageNum], () =>
    getLectureInfo(pageNum, pageSize)
  );
  const totalPages = Math.ceil(data?.totalNum / pageSize) || 0;

  useEffect(() => {
    const pageNumbers = [];
    let startPage, endPage;

    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (pageNum <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (pageNum + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = pageNum - 2;
        endPage = pageNum + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    setPages(pageNumbers);
  }, [pageNum, totalPages]);
  // const [searchResult, setSearchResult] = useState([]);
  // const [resultCount, setResultCount] = useState([]);
  // const [content, setContent] = useState('');
  // let location = useLocation();
  // let params = new URLSearchParams(location.search); //?query=구름
  // let searchText = params.get('searchText');
  // console.log(searchText);
  const handleCategory = category => {
    navigate(`/lectures/page/${category}`);
  };
  useEffect(() => {
    const pageNumbers = [];
    let startPage, endPage;

    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (pageNum <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (pageNum + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = pageNum - 2;
        endPage = pageNum + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    setPages(pageNumbers);
  }, []);

  const handlePageChange = async newPage => {
    navigate(`/lectures/page/${newPage}`);

    // sessionStorage.setItem('currentPage', newPage);
    // queryClient.invalidateQueries(['lectureInfo', newPage]);
  };
  if (data) {
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
                  </AccordionButton>
                </h2>
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
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      onClick={() => handleCategory()}
                    >
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
              {data.data.map(item => (
                <GridItem key={item.LectureId} mx="auto">
                  <LectureCard
                    lectureNumber={item.LectureId}
                    key={item.id}
                    img={item.thumbnail}
                    lectureDescription={item.lectureDescription}
                    lectureTitle={item.lectureTitle}
                    targetAudience={item.targetAudience}
                    instructor={item.instructor.username}
                  />
                </GridItem>
              ))}
            </Grid>
            <VStack mt="4" spacing="2">
              <InputGroup>
                <Button
                  leftIcon={<ChevronLeftIcon />}
                  onClick={() =>
                    handlePageChange(pageNum > 1 ? pageNum - 1 : 1)
                  }
                  disabled={pageNum <= 1}
                >
                  이전
                </Button>
                <HStack spacing="1">
                  {pages.map(page => (
                    <Button
                      key={page}
                      colorScheme={
                        page.toString() === pageNum ? 'blue' : 'gray'
                      }
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Button>
                  ))}
                </HStack>
                <Button
                  rightIcon={<ChevronRightIcon />}
                  onClick={() =>
                    handlePageChange(
                      pageNum < totalPages ? pageNum + 1 : totalPages
                    )
                  }
                  disabled={pageNum >= totalPages}
                >
                  다음
                </Button>
              </InputGroup>
            </VStack>
          </GridItem>
        </Grid>
        <Footer />
      </>
    );
  }
}

export default WholeLectures;
