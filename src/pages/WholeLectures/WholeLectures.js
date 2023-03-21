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
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from '@chakra-ui/react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getLectureAndCategoryAndSearch } from '../../api';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function WholeLectures() {
  const { bigCategory, smallCategory } = useParams();
  const [categoryName, setCategoryName] = useState('');
  const navigate = useNavigate();
  const { headerSearch, setHeaderSearch } = useState('');
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
  const setHeaderSearchtoChildren = search => {
    console.log('data', search);
    // setHeaderSearch(search);
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
      alert('검색어를 입력해주세요');
      // navigate(`/lectures/${bigCategory}/${smallCategory}?page=${newPage}`);
    } else {
      navigate(
        `/lectures/${bigCategory}/${smallCategory}?page=${newPage}&search=${searchResult}`
      );
    }
  };
  if (data) {
    console.log(data);
    return (
      <>
        {console.log(searchResult)}
        <Header
          setHeaderSearchtoChildren={setHeaderSearchtoChildren}
          data="124"
        />
        <Grid
          templateAreas={`"nav search"
                  "nav main"`}
          gridTemplateRows={'100px 1fr'}
          gridTemplateColumns={'220px 1fr'}
          // h="800px"
          w="1200px"
          pt="120px"
          pb="10"
          px="4"
          gap="1"
          mx="auto"
        >
          <GridItem area={'search'} w="100%">
            <HStack justify="space-between" w="800px" mx="auto">
              <Box w="20%" fontSize="20px" fontWeight="500" color="#958E96">
                {categoryName ? categoryName : '전체강의'}
              </Box>
              <InputGroup w="40%">
                <Input
                  className="Input"
                  variant="outline"
                  value={searchResult}
                  placeholder={
                    categoryName ? `${categoryName} 검색` : '전체강의 검색'
                  }
                  onChange={event => {
                    setSearchResult(event.target.value);
                  }}
                />
                <InputRightAddon px="0">
                  <Button
                    fontSize="15px"
                    w="100%"
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
          <GridItem w="100%" area={'nav'}>
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
                    setCategoryName('기초코딩 / HTML');
                  }}
                >
                  HTML
                </AccordionPanel>
                <AccordionPanel
                  pb={4}
                  onClick={() => {
                    navigate('/lectures/basic/css/?page=1');
                    setCategoryName('기초코딩 / CSS');
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
                    setCategoryName('프론트엔드 / React');
                  }}
                >
                  React
                </AccordionPanel>
                <AccordionPanel
                  pb={4}
                  onClick={() => {
                    navigate('/lectures/front/vue/?page=1');
                    setCategoryName('프론트엔드 / Vue.js');
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
                      setCategoryName('벡엔드');
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
                    setCategoryName('벡엔드 / Spring');
                  }}
                >
                  Spring
                </AccordionPanel>
                <AccordionPanel
                  pb={4}
                  onClick={() => {
                    navigate('/lectures/backend/django/?page=1');
                    setCategoryName('벡엔드 / Django');
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
                    setCategoryName('모바일 / Swift');
                  }}
                >
                  Swift
                </AccordionPanel>
                <AccordionPanel
                  pb={4}
                  onClick={() => {
                    navigate('/lectures/mobile/android/?page=1');
                    setCategoryName('모바일 / Android');
                  }}
                >
                  Android
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>
          <GridItem area={'main'} w="800px" mx="auto">
            {data?.data?.length === 0 || undefined ? (
              <Box>
                <Text>{searchName} 에 대한 검색결과가 없습니다.</Text>
              </Box>
            ) : (
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
                          rating={item.rating}
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
                          rating={item.rating}
                        />
                      </GridItem>
                    ))}
              </Grid>
            )}

            <VStack mt="10" w="100%">
              <InputGroup justifyContent="center">
                <Button
                  leftIcon={<ChevronLeftIcon />}
                  onClick={() =>
                    handlePageChange(pageNum > 1 ? pageNum - 1 : 1)
                  }
                  disabled={pageNum <= 1}
                  mr="2"
                  variant="ghost"
                >
                  이전
                </Button>
                <HStack spacing="2">
                  {pages.map(page => (
                    <Button
                      key={page}
                      colorScheme={
                        page.toString() === pageNum ? 'whatsapp' : 'gray'
                      }
                      variant={
                        page.toString() === pageNum ? 'outline' : 'ghost'
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
                  ml="2"
                  variant="ghost"
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
