import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Text, Button, Stack, Image, Heading } from '@chakra-ui/react';
const LectureCard = () => {
  return (
    <Card
      width={'300px'}
      height={'350px'}
      direction={{ base: 'column' }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '100%' }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABTaW4jy-lxGATrw8bfRsNlkKK1mSxvlb_A&usqp=CAU"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">The perfect latte</Heading>

          <Text py="2">
            Caffè latte is a coffee beverage of Italian origin made with
            espresso and steamed milk.
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Buy Latte
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default LectureCard;
