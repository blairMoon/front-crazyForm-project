import { React, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import {
  Text,
  Button,
  Stack,
  Image,
  Heading,
  HStack,
  Box,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { getLectureInfor } from '../../api';
import { Link } from 'react-router-dom';
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import StarRating from './StarRating';

// import { Link } from 'react-router-dom';
const LectureCard = ({
  lectureNumber,
  img,
  lectureDescription,
  lectureTitle,
  instructor,
  targetAudience,
  thumbnail,
  rating,
}) => {
  return (
    <Link to={`/lectures/${lectureNumber}`}>
      <Card
        width={'250px'}
        height={'280px'}
        direction={{ base: 'column' }}
        variant="outline"
        _hover={{ background: 'rgba(0, 0, 0, 0.4 )', zIndex: 10 }}
      >
        <Box
          display="flex"
          flexDirection="column"
          position="absolute"
          zIndex={10}
          width={'250px'}
          height={'280px'}
          cursor="pointer"
          justifyContent="space-between"
          opacity="0"
          _hover={{
            opacity: '1',
            background: 'rgba(0, 0, 0, 0.7)',
            zIndex: 10,
          }}
          padding="15px"
        >
          <Stack>
            <Heading size="md" color="white" pb="10px">
              {lectureTitle}
            </Heading>
            <Text color="white">{lectureDescription}</Text>
          </Stack>
          <Text color="red">{targetAudience}</Text>
        </Box>
        <Image
          objectFit="cover"
          // maxW={{ base: '100%', sm: '100%' }}
          minH="180px"
          height="180px"
          src={img}
          alt="Caffe Latte"
        />
        <Stack>
          <CardBody>
            <Heading size="md" fontSize="17px">
              {lectureTitle}
            </Heading>
            <Text py="2">{instructor}</Text>

            <HStack spacing="3px">
              <StarRating rating={rating} />
            </HStack>
          </CardBody>
        </Stack>
      </Card>
    </Link>
  );
};

export default LectureCard;
