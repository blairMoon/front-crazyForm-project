import React from 'react';

import { Stack, Box, Divider } from '@chakra-ui/react';

const Reply = () => {
  return (
    <Stack py="3">
      <Stack bg="rgba(238,238,238,0.4)" px="5" py="5">
        <Box fontWeight="700" color="#958E96">
          뚜니코딩
        </Box>
        <Box py="3">감사합니다 :)</Box>
        <Box color="#A6A6A6" fontWeight="600">
          2022-06-03
        </Box>
      </Stack>
    </Stack>
  );
};

export default Reply;
