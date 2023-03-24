import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, HStack, Stack, Divider } from '@chakra-ui/react';
import { RiHomeHeartLine } from 'react-icons/ri';

import { TiThSmall } from 'react-icons/ti';
import { SiHtml5, SiCss3, SiReact, SiSpring, SiDjango } from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa';
import { DiAndroid } from 'react-icons/di';
import { GrSwift } from 'react-icons/gr';
const MenuBtn = () => {
  const { bigCategory, smallCategory } = useParams();

  const navigate = useNavigate();
  return (
    <>
      <Stack w="100%" fontWeight="600">
        {/* <Box px="1" paddingBottom="3">
          메뉴
        </Box>
        <Divider /> */}
        <HStack
          px="5"
          py="2"
          fontSize="18px"
          cursor="pointer"
          _hover={{
            borderRadius: 'lg',
            color: 'white',
            bg: '#003C93',
          }}
          onClick={() => {
            navigate('/lectures/all/all/?page=1');
          }}
          borderRadius={
            bigCategory === 'all' && smallCategory === 'all' ? 'lg' : null
          }
          color={
            bigCategory === 'all' && smallCategory === 'all' ? 'white' : null
          }
          bg={
            bigCategory === 'all' && smallCategory === 'all' ? '#003C93' : null
          }
        >
          <Box>전체강의</Box>
        </HStack>
        <Divider />
        <HStack
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: 'lg',
            color: 'white',
            bg: '#003C93',
          }}
          onClick={() => {
            navigate('/lectures/basic/all/?page=1');
          }}
          borderRadius={
            bigCategory === 'basic' && smallCategory === 'all' ? 'lg' : null
          }
          color={
            bigCategory === 'basic' && smallCategory === 'all' ? 'white' : null
          }
          bg={
            bigCategory === 'basic' && smallCategory === 'all'
              ? '#003C93'
              : null
          }
        >
          <Box>기초 코딩</Box>
        </HStack>
        <HStack
          fontSize="14px"
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: 'lg',
            color: 'white',
            bg: '#769dd6',
          }}
          borderRadius={
            bigCategory === 'basic' && smallCategory === 'html' ? 'lg' : null
          }
          color={
            bigCategory === 'basic' && smallCategory === 'html' ? 'white' : null
          }
          bg={
            bigCategory === 'basic' && smallCategory === 'html'
              ? '#769dd6'
              : null
          }
          onClick={() => {
            navigate('/lectures/basic/html/?page=1');
          }}
        >
          <SiHtml5 />
          <Box>HTML</Box>
        </HStack>
        <HStack
          fontSize="14px"
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: 'lg',
            color: 'white',
            bg: '#769dd6',
          }}
          onClick={() => {
            navigate('/lectures/basic/css/?page=1');
          }}
          borderRadius={
            bigCategory === 'basic' && smallCategory === 'css' ? 'lg' : null
          }
          color={
            bigCategory === 'basic' && smallCategory === 'css' ? 'white' : null
          }
          bg={
            bigCategory === 'basic' && smallCategory === 'css'
              ? '#769dd6'
              : null
          }
        >
          <SiCss3 />
          <Box>CSS</Box>
        </HStack>
        <Divider />
        <HStack
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: 'lg',
            color: 'white',
            bg: '#003C93',
          }}
          onClick={() => {
            navigate('/lectures/frontend/all/?page=1');
          }}
          borderRadius={
            bigCategory === 'frontend' && smallCategory === 'all' ? 'lg' : null
          }
          color={
            bigCategory === 'frontend' && smallCategory === 'all'
              ? 'white'
              : null
          }
          bg={
            bigCategory === 'frontend' && smallCategory === 'all'
              ? '#003C93'
              : null
          }
        >
          <Box>프론트엔드</Box>
        </HStack>
        <HStack
          fontSize="14px"
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: 'lg',
            color: 'white',
            bg: '#769dd6',
          }}
          onClick={() => {
            navigate('/lectures/frontend/react/?page=1');
          }}
          borderRadius={
            bigCategory === 'frontend' && smallCategory === 'react'
              ? 'lg'
              : null
          }
          color={
            bigCategory === 'frontend' && smallCategory === 'react'
              ? 'white'
              : null
          }
          bg={
            bigCategory === 'frontend' && smallCategory === 'react'
              ? '#769dd6'
              : null
          }
        >
          {' '}
          <SiReact />
          <Box>React</Box>
        </HStack>
        <HStack
          fontSize="14px"
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: 'lg',
            color: 'white',
            bg: '#769dd6',
          }}
          onClick={() => {
            navigate('/lectures/frontend/vue/?page=1');
          }}
          borderRadius={
            bigCategory === 'frontend' && smallCategory === 'vue' ? 'lg' : null
          }
          color={
            bigCategory === 'frontend' && smallCategory === 'vue'
              ? 'white'
              : null
          }
          bg={
            bigCategory === 'frontend' && smallCategory === 'vue'
              ? '#769dd6'
              : null
          }
        >
          {' '}
          <FaVuejs />
          <Box>Vue</Box>
        </HStack>
        <Divider />
        <HStack
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: 'lg',
            color: 'white',
            bg: '#003C93',
          }}
          onClick={() => {
            navigate('/lectures/backend/all/?page=1');
          }}
          borderRadius={
            bigCategory === 'backend' && smallCategory === 'all' ? 'lg' : null
          }
          color={
            bigCategory === 'backend' && smallCategory === 'all'
              ? 'white'
              : null
          }
          bg={
            bigCategory === 'backend' && smallCategory === 'all'
              ? '#003C93'
              : null
          }
        >
          <Box>백엔드</Box>
        </HStack>
        <HStack
          fontSize="14px"
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: 'lg',
            color: 'white',
            bg: '#769dd6',
          }}
          onClick={() => {
            navigate('/lectures/backend/spring/?page=1');
          }}
          borderRadius={
            bigCategory === 'backend' && smallCategory === 'spring'
              ? 'lg'
              : null
          }
          color={
            bigCategory === 'backend' && smallCategory === 'spring'
              ? 'white'
              : null
          }
          bg={
            bigCategory === 'backend' && smallCategory === 'spring'
              ? '#769dd6'
              : null
          }
        >
          {' '}
          <SiSpring />
          <Box>Spring</Box>
        </HStack>
        <HStack
          fontSize="14px"
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: 'lg',
            color: 'white',
            bg: '#769dd6',
          }}
          onClick={() => {
            navigate('/lectures/backend/django/?page=1');
          }}
          borderRadius={
            bigCategory === 'backend' && smallCategory === 'django'
              ? 'lg'
              : null
          }
          color={
            bigCategory === 'backend' && smallCategory === 'django'
              ? 'white'
              : null
          }
          bg={
            bigCategory === 'backend' && smallCategory === 'django'
              ? '#769dd6'
              : null
          }
        >
          {' '}
          <SiDjango />
          <Box>Django</Box>
        </HStack>
        <Divider />
        <HStack
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: 'lg',
            color: 'white',
            bg: '#003C93',
          }}
          onClick={() => {
            navigate('/lectures/mobile/all/?page=1');
          }}
          borderRadius={
            bigCategory === 'mobile' && smallCategory === 'all' ? 'lg' : null
          }
          color={
            bigCategory === 'mobile' && smallCategory === 'all' ? 'white' : null
          }
          bg={
            bigCategory === 'mobile' && smallCategory === 'all'
              ? '#003C93'
              : null
          }
        >
          <Box>모바일</Box>
        </HStack>
        <HStack
          fontSize="14px"
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: 'lg',
            color: 'white',
            bg: '#769dd6',
          }}
          onClick={() => {
            navigate('/lectures/mobile/swift/?page=1');
          }}
          borderRadius={
            bigCategory === 'mobile' && smallCategory === 'swift' ? 'lg' : null
          }
          color={
            bigCategory === 'mobile' && smallCategory === 'swift'
              ? 'white'
              : null
          }
          bg={
            bigCategory === 'mobile' && smallCategory === 'swift'
              ? '#769dd6'
              : null
          }
        >
          {' '}
          <GrSwift />
          <Box>Swift</Box>
        </HStack>
        <HStack
          fontSize="14px"
          px="5"
          py="2"
          cursor="pointer"
          _hover={{
            borderRadius: 'lg',
            color: 'white',
            bg: '#769dd6',
          }}
          onClick={() => {
            navigate('/lectures/mobile/android/?page=1');
          }}
          borderRadius={
            bigCategory === 'mobile' && smallCategory === 'android'
              ? 'lg'
              : null
          }
          color={
            bigCategory === 'mobile' && smallCategory === 'android'
              ? 'white'
              : null
          }
          bg={
            bigCategory === 'mobile' && smallCategory === 'android'
              ? '#769dd6'
              : null
          }
        >
          {' '}
          <DiAndroid />
          <Box>Android</Box>
        </HStack>
      </Stack>
    </>
  );
};

export default MenuBtn;
