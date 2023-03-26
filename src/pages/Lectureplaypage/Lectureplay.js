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
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false); // 비디오가 로드되었는지 확인하기 위한 state

  const playerRef = useRef(null);

  const { lectureId, num } = useParams();
  const {
    data: videoList,
    isLoading,
    isError,
  } = useQuery(['videoList', lectureId, num], fetchVideoList);

  const queryClient = useQueryClient();
  const savePlayedSecondsMutation = useMutation(savePlayedSeconds, {
    onSuccess: () => {
      queryClient.invalidateQueries(['videoList', lectureId, num]);
    },
  });

  const handleDuration = duration => {
    console.log('duration', duration); // logs the video duration in seconds
  };

  const handleProgress = state => {
    setPlayedSeconds(state.playedSeconds);
  };

  useEffect(() => {
    const fetchedPlayedSeconds = videoList?.lastPlayed;
    if (fetchedPlayedSeconds) {
      setPlayedSeconds(parseFloat(fetchedPlayedSeconds));
      playerRef.current?.seekTo(parseFloat(fetchedPlayedSeconds), 'seconds');
    } else {
      setPlayedSeconds(0);
      playerRef.current?.seekTo(0, 'seconds');
    }
  }, [videoList]);

  const aspectRatio = 9 / 16; // 비디오 비율 (9:16)
  const maxWidth = 1280; // 최대 너비
  const maxHeight = maxWidth * aspectRatio; // 최대 높이

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const btnRef = useRef();

  const handleSaveAndClose = async () => {
    try {
      await savePlayedSecondsMutation.mutateAsync({
        lectureId,
        num,
        lastPlayed: playedSeconds,
      });
    } catch (error) {
      console.error(error);
    }
    console.log('Current played seconds:', playedSeconds);
  };

  const handlePlayerReady = () => {
    const fetchedPlayedSeconds = videoList?.lastPlayed;
    if (fetchedPlayedSeconds && !loaded) {
      playerRef.current.seekTo(parseFloat(fetchedPlayedSeconds), 'seconds');
      setPlaying(true); // 재생 시작
      setLoaded(true); // 비디오가 로드되었음을 알림
    }
  };

  const handleError = e => {
    console.error('비디오 에러:', e);
  };

  // console.log(videoList?.lastPlayed);
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
              playing={playing} // 변경된 부분
              muted={true} // 자동 재생 on
              loop={false} // 무한 반복 여부
              controls={true} // 플레이어 컨트롤 노출 여부
              light={false} // 플레이어 모드
              pip={true} // pip 모드 설정 여부
              played={[
                videoList?.lastPlayed || 0, // 서버에서 받아온 playedSeconds 또는 0
                undefined, // 영상의 끝까지 재생
              ]}
              onProgress={handleProgress}
              // onPause={handlePause}
              // onReady={handlePlayerReady}
              onDuration={handleDuration} //영상길이
              ref={playerRef}
              onReady={handlePlayerReady}
              onError={handleError}
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
          <Button
            ref={btnRef}
            colorScheme="ghost"
            onClick={() => setIsDrawerOpen(true)}
          >
            {<BsListUl size={35} style={{ color: 'black' }} />}
          </Button>
        </Flex>

        <Drawer
          isOpen={isDrawerOpen}
          placement="right"
          onClose={() => setIsDrawerOpen(false)}
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
                      key={video.id}
                      videoId={video.id}
                      videoTitle={video.title}
                      videoLength={video.videoLength}
                      lectureId={lectureId}
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
