import React from 'react';

import { Box, HStack } from '@chakra-ui/react';

import { BsCheckCircleFill, BsFillPlayCircleFill } from 'react-icons/bs';

import { useNavigate, useParams } from 'react-router-dom';

const VideoList = ({ videoId, videoTitle, videoLength, lectureId }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* <HStack p="2" bg="#dfe8f5" borderRadius="lg">
        <Box p="1">
          <BsCheckCircleFill size={30} style={{ color: '#003c93' }} />
        </Box>
        <Box>
          <Box>{videoTitle}</Box>
          <Box display="flex" alignItems="center" fontSize="14">
            <BsFillPlayCircleFill style={{ color: '#003c93' }} />
            <Box pl="1">{videoLength}초</Box>
          </Box>
        </Box>
      </HStack> */}
      <HStack
        p="2"
        borderRadius="lg"
        bg="#f2f3f5"
        _hover={{ cursor: 'pointer' }}
        onClick={() => {
          navigate(`/lectureplay/${lectureId}/${videoId}`);
        }}
      >
        <Box p="1">
          <BsCheckCircleFill size={30} style={{ color: '#bdbdbf' }} />
        </Box>
        <Box>
          <Box>{videoTitle}</Box>
          <Box display="flex" alignItems="center" fontSize="14">
            <BsFillPlayCircleFill style={{ color: '#969696' }} />
            <Box pl="1">{videoLength}초</Box>
          </Box>
        </Box>
      </HStack>
    </>
  );
};

export default VideoList;
