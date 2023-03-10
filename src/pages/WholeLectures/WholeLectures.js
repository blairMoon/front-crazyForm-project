import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import css from './WholeLectures.module.scss';
import { Box, Grid, GridItem, Input, Select } from '@chakra-ui/react';

function WholeLectures() {
  return (
    <>
      <Header />
      <Box p="5">
        <Box mb="5">
          <Input placeholder="검색" size="md" />
          <Select placeholder="카테고리 선택" size="md" ml="2">
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="devops">DevOps</option>
          </Select>
        </Box>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap="5">
          {Array.from(Array(9), (_, i) => (
            <GridItem key={i}>
              <CourseCard />
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default WholeLectures;
