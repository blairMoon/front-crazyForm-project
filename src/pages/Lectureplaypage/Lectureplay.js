import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import {
  Box,
  Stack,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import LectureHeader from '../../components/LectureHeader/LectureHeader';
import { fetchVideoList, savePlayedSeconds } from '../../api';
import { BsListUl } from 'react-icons/bs';

import VideoList from '../../components/VideoList/VideoList';

const Video = () => {
  const [playedSeconds, setPlayedSeconds] = useState(0);

  const playerRef = useRef(null);

  const handleDuration = duration => {
    console.log('duration', duration); // logs the video duration in seconds
  };

  const handleProgress = state => {
    setPlayedSeconds(state.playedSeconds);
  };

  // useEffect(() => {
  //   const fetchPlayedSeconds = async () => {
  //     const fetchedPlayedSeconds = await getPlayedSeconds();
  //     setPlayedSeconds(parseFloat(fetchedPlayedSeconds));
  //     playerRef.current?.seekTo(parseFloat(fetchedPlayedSeconds), 'seconds');
  //   };

  //   fetchPlayedSeconds();
  // }, []);

  // useEffect(() => {
  //   const fetchPlayedSeconds = async () => {
  //     try {
  //       const videoItem = videoList.list?.find(
  //         video => video.id.toString() === num
  //       );
  //       const fetchedPlayedSeconds = videoItem?.lastPlayed;

  //       if (fetchedPlayedSeconds) {
  //         setPlayedSeconds(parseFloat(fetchedPlayedSeconds));
  //         playerRef.current?.seekTo(
  //           parseFloat(fetchedPlayedSeconds),
  //           'seconds'
  //         );
  //       }
  //     } catch (error) {
  //       console.error('Error fetching played seconds:', error);
  //     }
  //   };

  //   if (videoList) {
  //     fetchPlayedSeconds();
  //   }
  // }, [videoList, num]);

  const { lectureId, num } = useParams();
  const {
    data: videoList,
    isLoading,
    isError,
  } = useQuery(['videoList', lectureId, num], fetchVideoList);

  const aspectRatio = 9 / 16; // 비디오 비율 (9:16)
  const maxWidth = 1280; // 최대 너비
  const maxHeight = maxWidth * aspectRatio; // 최대 높이

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const btnRef = useRef();

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation(savePlayedSeconds, {
    onSuccess: () => {
      queryClient.invalidateQueries(['videoList']);
    },
  });

  const handleSaveAndClose = async () => {
    // await savePlayedSeconds(playedSeconds);
    try {
      await mutate({ lectureId, num, lastPlayed: playedSeconds });
    } catch (error) {
      console.error(error);
    }
    console.log('Current played seconds:', playedSeconds);
  };
  if (videoList) {
    return (
      <>
        <LectureHeader />
        <Flex justifyContent="space-between">
          <Box
            width="100%"
            maxWidth={`${maxWidth}px`}
            position="relative"
            paddingTop={`calc(100% * ${aspectRatio})`}
            maxHeight={`${maxHeight}px`}
            margin="auto"
            overflow="hidden"
          >
            <ReactPlayer
              className="react-player"
              style={{ position: 'absolute', top: 0, left: 0 }}
              width="100%" // 플레이어 크기 (가로)
              height="100%" // 플레이어 크기 (세로)
              url={videoList.url.videoFile}
              playing={true} // 자동 재생 on
              muted={true} // 자동 재생 on
              loop={false} // 무한 반복 여부
              controls={true} // 플레이어 컨트롤 노출 여부
              light={false} // 플레이어 모드
              pip={true} // pip 모드 설정 여부
              played={playedSeconds.toString()}
              onProgress={handleProgress}
              // onPause={handlePause}
              // onReady={handlePlayerReady}
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
          <Button onClick={handleSaveAndClose}>저장 후 닫기</Button>
          <Button ref={btnRef} colorScheme="ghost" onClick={handleDrawerOpen}>
            {<BsListUl size={35} style={{ color: 'black' }} />}
          </Button>
        </Flex>

        <Drawer
          isOpen={isDrawerOpen}
          placement="right"
          onClose={handleDrawerClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Box fontSize="24">목차</Box>
                <Box>{videoList.url.calculatedLecture.lectureTitle}</Box>
                <Box fontSize="14">진도율 : 3강/18강 (16.67%)</Box>
                <Box fontSize="14">시간 : 18분/2시간 37분</Box>
                <Box>프로그레스바~~</Box>
              </DrawerHeader>

              <DrawerBody width="100%" fontWeight="600">
                <Stack spacing={3}>
                  {videoList.list?.map((video, index) => (
                    <VideoList
                      watchVideo={index + 1 === num ? showListVideo : false}
                      key={video.id}
                      videoId={video.id}
                      videoTitle={video.title}
                      videoLength={video.videoLength}
                      lectureId={lectureId}
                      numColor={index + 1 == num ? '#dfe8f5' : '#f2f3f5'}
                    />
                  ))}
                </Stack>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    );
  }
};

export default Video;
