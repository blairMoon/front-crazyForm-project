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

const LectureCard = ({ lectureNumber }) => {
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
              I'm a Heading
            </Heading>
            <Text color="white">
              동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세
            </Text>
          </Stack>
          <Text color="red">중급</Text>
        </Box>
        <Image
          objectFit="cover"
          maxW={{ base: '100%', sm: '100%' }}
          src="data:image/jpeg;base64,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"
          alt="Caffe Latte"
        />
        <Stack>
          <CardBody>
            <Heading size="md" fontSize="17px">
              김수람의 파이썬강의
            </Heading>
            <Text py="2">람람이</Text>

            <HStack spacing="3px">
              <StarRating rating={3.2} />
            </HStack>
          </CardBody>
        </Stack>
      </Card>
    </Link>
  );
};

export default LectureCard;
