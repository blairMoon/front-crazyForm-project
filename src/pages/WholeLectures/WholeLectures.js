import { React, useState, useEffect } from 'react';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const pageSize = 30;
  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery(['lectureInfo', currentPage], () =>
    getLectureInfo(currentPage, pageSize)
  );

  useEffect(() => {
    if (data) {
      const totalPages = Math.ceil(data.totalNum / pageSize);
      if (currentPage <= 5) {
        setPages(
          totalPages > 0
            ? [...Array(totalPages).keys()].map(i => i + 1).slice(0, 5)
            : []
        );
      } else {
        const newPages = [...Array(totalPages).keys()]
          .map(i => i + 1)
          .filter(
            page =>
              page >= currentPage &&
              page <= currentPage + 4 &&
              page >= 1 &&
              page <= totalPages
          );
        setPages(newPages);
      }
    }
  }, [data, currentPage, pageSize]);

  const handlePageChange = newPage => {
    if (newPage <= 5) {
      setCurrentPage(newPage);
    } else {
      setCurrentPage(newPage);
      // pages state 변경이 필요한 경우 currentPage state 변경 후 다음 렌더링에서 setPages 함수 호출
    }
    queryClient.invalidateQueries(['lectureInfo', newPage]);
    const url = new URL(window.location.href);
    url.searchParams.set('page', newPage);
    window.history.pushState(null, '', url.toString());
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    const totalPages = Math.ceil(data.totalNum / pageSize);

    if (data) {
      return (
        <>
          {console.log(data.data)}
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
                {data.data.map(item => (
                  <GridItem key={item.LectureId}>
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
                      handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
                    }
                    disabled={currentPage <= 1}
                  >
                    이전
                  </Button>
                  {console.log(pages)}
                  <HStack spacing="1">
                    {pages.map(page => (
                      <Button
                        key={page}
                        colorScheme={page === currentPage ? 'blue' : 'gray'}
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
                        currentPage < totalPages ? currentPage + 1 : totalPages
                      )
                    }
                    disabled={currentPage >= totalPages}
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
}

export default WholeLectures;
