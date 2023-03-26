import React, { useEffect, useState } from 'react';

import { Box, HStack, Button } from '@chakra-ui/react';

import { BsCheckCircleFill, BsFillPlayCircleFill } from 'react-icons/bs';

import { useNavigate, useParams, useLocation } from 'react-router-dom';

const VideoList = ({
  videoId,
  videoTitle,
  videoLength,
  lectureId,
  watchVideo,
  numColor,
  buttonColor,
  played80,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const num = location.pathname.split('/').pop();
  const [color, setColor] = useState('');

  // console.log(num);
  useEffect(() => {
    setBackgroundColor(num === videoId ? 'pink' : 'white');
  }, [num]);
  const [background, setBackgroundColor] = useState(
    num === videoId ? 'pink' : 'white'
  );
  // useEffect(() => {
  //   setBackgroundColor(num === videoId + 1 ? 'pink' : 'gray');
  //   console.log(num);
  //   console.log(videoId);
  // }, [num, videoId]);
  useEffect(() => {
    setColor(buttonColor);
  }, [buttonColor]);
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
        bg={numColor}
        _hover={{ cursor: 'pointer', background: '#dfe8f5' }}
        onClick={() => {
          navigate(`/lectureplay/${lectureId}/${videoId}`);

          // if (videoId === num) {
          //   setBackgroundColor('pink');
          // }
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
            {/* <Button
              colorScheme={
                buttonColor && numColor === '#dfe8f5' ? buttonColor : 'blue'
              }
              size="sm"
            ></Button> */}
          </Box>
        </Box>
      </HStack>
    </>
  );
};

export default VideoList;
