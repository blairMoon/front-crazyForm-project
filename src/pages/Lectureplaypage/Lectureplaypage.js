import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import {
  Box,
  Heading,
  VStack,
  HStack,
  Stack,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import LectureHeader from '../../components/LectureHeader/LectureHeader';
const Video = () => {
  const [videoList, setVideoList] = useState(0);
  const navigate = useNavigate();
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [categoryName, setCategoryName] = useState('');
  const playerRef = useRef(null);
  const handlePlayerReady = () => {
    if (playedSeconds > 0) {
      playerRef.current?.seekTo(parseFloat(playedSeconds), 'seconds');
    }
  };
  const handleDuration = duration => {
    console.log(duration); // logs the video duration in seconds
  };

  const handleProgress = state => {
    const now = new Date().getTime();
    const data = {
      playedSeconds: state.playedSeconds,
      lastPlayed: now,
    };
    localStorage.setItem('videoData', JSON.stringify(data));
    setPlayedSeconds(state.playedSeconds);
  };
  useEffect(() => {
    const savedData = localStorage.getItem('videoData');
    if (savedData) {
      const { playedSeconds, lastPlayed } = JSON.parse(savedData);
      const now = new Date().getTime();
      console.log(new Date().getTime());
      const timeDiff = now - lastPlayed;
      if (timeDiff < 86400000) {
        // 24 hours in milliseconds
        setPlayedSeconds(parseFloat(playedSeconds));
        playerRef.current?.seekTo(parseFloat(playedSeconds), 'seconds');
      }
    }
  }, []);

  // const youtubeConfig = {
  //   playerVars: {
  //     origin: window.location.origin,
  //   },
  // };
  // useEffect(() => {
  //   getVideoList();
  // }, []);

  // const getVideoList = async () => {
  //   try {
  //     await fetch(`http://127.0.0.1:8000/api/v1/users/Lectureplay`).then(res =>
  //       setVideoList(res.data.data)
  //     );
  //   } catch (e) {
  //     console.log('e:', e);
  //   }
  // };

  return (
    <>
      <LectureHeader />
      <Flex direction="column" align="center" h="100%">
        <HStack align="center">
          <Box>
            <ReactPlayer
              className="react-player"
              url="https://tinyurl.com/2p6w4l28"
              width="1280px" // 플레이어 크기 (가로)
              height="720px" // 플레이어 크기 (세로)
              playing={false} // 자동 재생 on
              muted={false} // 자동 재생 on
              loop={false} // 무한 반복 여부
              controls={true} // 플레이어 컨트롤 노출 여부
              // ref={playerRef}
              light={false} // 플레이어 모드
              pip={false} // pip 모드 설정 여부
              played={playedSeconds}
              onProgress={handleProgress}
              onReady={handlePlayerReady}
              onDuration={handleDuration} //영상길이
              config={{
                youtube: {
                  playerVars: {
                    origin: window.location.origin,
                  },
                },
              }}
            />
          </Box>
        </HStack>
      </Flex>
    </>
  );
};

export default Video;
