import { Redirect, React, useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LectureCard from '../../components/LectureCard/LectureCard';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getLectureInfo } from '../../api';

function MyLecture() {
  const navigate = useNavigate();

  const { isLoading, data } = useQuery(['lectureInfo'], () => getLectureInfo());
  console.log(data);

  if (data) {
    console.log(data);
    return (
      <>
        <Grid>
          <GridItem w="800px" mx="auto">
            <Grid
              templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
              gap="5"
            >
              {data.data?.map(item => (
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
          </GridItem>
        </Grid>
      </>
    );
  }
}

export default MyLecture;
