import React from 'react';

import { Box, HStack, Button } from '@chakra-ui/react';

import { BsCheckCircleFill, BsFillPlayCircleFill } from 'react-icons/bs';

import { useNavigate, useLocation } from 'react-router-dom';

const VideoList = ({
  videoId,
  videoTitle,
  videoLength,
  lectureId,
  num,
  numColor,
  buttonColor,
  index,
  resetCompleted,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const num = location.pathname.split('/').pop();

  return (
    <>
      <HStack
        p="2"
        borderRadius="lg"
        bg={numColor}
        _hover={{ cursor: 'pointer', background: '#dfe8f5' }}
        onClick={() => {
          navigate(`/lectureplay/${lectureId}/${index}`);
          resetCompleted();
        }}
      >
        <Box p="1">
          <BsCheckCircleFill
            size={30}
            color={buttonColor} // played80 값에 따라 색상 변경
          />
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
