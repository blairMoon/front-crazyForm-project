import { React, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
} from '@chakra-ui/react';
import { Text, Stack, Heading, HStack } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import StarRating from '../LectureCard/StarRating';

const ReviewCard = ({ user, lectureNum, rating, id, contents }) => {
  return (
    <Link to={`reviews/${lectureNum}`}>
      <Stack>
        <Card
          width={'500px'}
          height={'250px'}
          direction={{ base: 'column' }}
          borderColor={'#003C93'}
          variant="outline"
          borderRadius={20}
        >
          <Stack>
            <CardBody>
              <Heading size="md" fontSize="17px">
                베스트 후기{id}
              </Heading>
              <Text py="2">{user}</Text>
              <Text py="2">{contents}</Text>
              <HStack spacing="3px" justify="center">
                <StarRating rating={rating} />
              </HStack>
            </CardBody>
          </Stack>
        </Card>
      </Stack>
    </Link>
  );
};

export default ReviewCard;
