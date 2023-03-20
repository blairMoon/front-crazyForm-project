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
  HStack,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getLectureAndCategoryAndSearch } from '../../api';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function WholeLectures() {
  const { bigCategory, smallCategory } = useParams();
  const [categoryName, setCategoryName] = useState('');
  const navigate = useNavigate();
  //검색
  const [searchResult, setSearchResult] = useState('');
  const queryClient = useQueryClient();
  const [pages, setPages] = useState([]);
  const pageSize = 30;
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pageNum = params.get('page');
  const searchName = params.get('search');

  //검색데이터 받아오기
  const queryClinet = useQueryClient();
  const {
    isLoading: isSearching,
    data,
    refetch: refetchSearch,
  } = useQuery(
    ['lectureSearch', bigCategory, smallCategory, pageNum, searchName],
    getLectureAndCategoryAndSearch
  );

  // const handleSearchData = async () => {
  //   if (!searchResult) {
  //     return alert('검색결과가 없습니다.');
  //   }
  //   refetchSearch();
  // };
  // const { isLoading, data } = useQuery(
  //   ['lectureInfo', bigCategory, smallCategory, pageNum],
  //   getLectureAndCategory
  // );
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

  useEffect(() => {
    console.log('searchResults', data);
  }, [data]);

  const handlePageChange = async newPage => {
    navigate(`/lectures/${bigCategory}/${smallCategory}?page=${newPage}`);
  };

  const handleSearch = newPage => {
    queryClinet.resetQueries([
      'lectureSearch',
      bigCategory,
      smallCategory,
      pageNum,
      searchName,
    ]);
    if (searchResult === '' || searchResult === undefined) {
      navigate(`/lectures/${bigCategory}/${smallCategory}?page=${newPage}`);
    } else {
      navigate(
        `/lectures/${bigCategory}/${smallCategory}?page=${newPage}&search=${searchResult}`
      );
    }
  };
  if (data) {
    return (
      <>
        {console.log(searchResult)}
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
              <Box w="20%">{categoryName}</Box>
              <InputGroup w="30%">
                <Input
                  className="Input"
                  variant="outline"
                  value={searchResult}
                  placeholder={`${categoryName} 검색`}
                  onChange={event => {
                    setSearchResult(event.target.value);
                  }}
                />
                <InputRightAddon>
                  <Button
                    onClick={() => {
                      handleSearch(1);
                    }}
                  >
                    검색
                  </Button>
                </InputRightAddon>
              </InputGroup>
            </HStack>
          </GridItem>
          <GridItem w="100%" pr="5" area={'nav'}>
            <Accordion allowToggle color="#585858">
              <AccordionItem>
                <h2>
                  <AccordionButton
                    onClick={() => {
                      navigate('/lectures/all/all/?page=1');
                      setCategoryName('전체강의');
                    }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      전체 강의
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    onClick={() => {
                      navigate('/lectures/basic/all/?page=1');
                      setCategoryName('기초코딩');
                    }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      기초 코딩
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  onClick={() => {
                    navigate('/lectures/basic/html/?page=1');
                    setCategoryName('HTML');
                  }}
                >
                  HTML
                </AccordionPanel>
                <AccordionPanel
                  pb={4}
                  onClick={() => {
                    navigate('/lectures/basic/css/?page=1');
                    setCategoryName('CSS');
                  }}
                >
                  CSS
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    onClick={() => {
                      navigate('/lectures/frontend/all/?page=1');
                      setCategoryName('프론트엔드');
                    }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      프론트엔드
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  onClick={() => {
                    navigate('/lectures/front/react/?page=1');
                    setCategoryName('React');
                  }}
                >
                  React
                </AccordionPanel>
                <AccordionPanel
                  pb={4}
                  onClick={() => {
                    navigate('/lectures/front/vue/?page=1');
                    setCategoryName('Vue.js');
                  }}
                >
                  Vue.js
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton
                    onClick={() => {
                      navigate('/lectures/backend/all/?page=1');
                      setCategoryName('Backend');
                    }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      // onClick={() => {
                      //   setBigCategoryChange('frontend');
                      // }}
                    >
                      백엔드
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  onClick={() => {
                    navigate('/lectures/backend/spring/?page=1');
                    setCategoryName('Spring');
                  }}
                >
                  Spring
                </AccordionPanel>
                <AccordionPanel
                  pb={4}
                  onClick={() => {
                    navigate('/lectures/backend/django/?page=1');
                    setCategoryName('Django');
                  }}
                >
                  Django
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    onClick={() => {
                      navigate('/lectures/mobile/all/?page=1');
                      setCategoryName('모바일');
                    }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      모바일
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  onClick={() => {
                    navigate('/lectures/mobile/swift/?page=1');
                    setCategoryName('Swift');
                  }}
                >
                  Swift
                </AccordionPanel>
                <AccordionPanel
                  pb={4}
                  onClick={() => {
                    navigate('/lectures/mobile/android/?page=1');
                    setCategoryName('Android');
                  }}
                >
                  Android
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>
          <GridItem area={'main'} w="800px" mx="auto">
            <Grid
              templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
              gap="5"
            >
              {searchName && !isSearching
                ? data?.data?.map(item => (
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
                  ))
                : data?.data?.map(item => (
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
      </>
    );
  }
}

export default WholeLectures;
