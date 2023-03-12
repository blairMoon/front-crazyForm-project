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
                variant="outline"
                placeholder={`전체 강의 검색`}
              />
              <InputRightAddon>
                <Button>검색</Button>
              </InputRightAddon>
            </InputGroup>
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
}

export default WholeLectures;
