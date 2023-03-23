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
  const location = useLocation();
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

  const youtubeConfig = {
    playerVars: {
      origin: window.location.origin,
    },
  };
  useEffect(() => {
    getVideoList();
  }, []);

  const getVideoList = async () => {
    try {
      await fetch(`http://127.0.0.1:8000/api/v1/videos/1`).then(res =>
        res.json().then(data => {
          console.log('Video URL:', data.videoFile);
          setVideoList(data.videoFile);
        })
      );
    } catch (e) {
      console.log('e:', e);
    }
  };
  const getVideoUrl = () => {
    const searchParams = new URLSearchParams(location.search);
    return (
      searchParams.get('videoUrl') || 'http://127.0.0.1:8000/api/v1/videos/1'
    ); // Default URL
  };
  const aspectRatio = 9 / 16; // 비디오 비율 (9:16)
  const maxWidth = 1280; // 최대 너비
  const maxHeight = maxWidth * aspectRatio; // 최대 높이
  return (
    <>
      <LectureHeader />

      <HStack align="center">
        <Box
          width="100%"
          height="100%"
          margin="auto"
          overflow="hidden"
          className="player-wrapper"
        >
          <ReactPlayer
            className="react-player"
            width="100%"
            height="100%" // 플레이어 크기 (세로)
            url={getVideoUrl()}
            playing={true} // 자동 재생 on
            muted={true} // 자동 재생 on
            loop={false} // 무한 반복 여부
            controls={true} // 플레이어 컨트롤 노출 여부
            light={false} // 플레이어 모드
            pip={true} // pip 모드 설정 여부
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
    </>
  );
};

export default Video;
