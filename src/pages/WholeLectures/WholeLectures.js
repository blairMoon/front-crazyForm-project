import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './Home.module.css';
import LectureCard from '../../components/LectureCard/LectureCard';
import { Text, Button, Stack, Image, Heading } from '@chakra-ui/react';
function WholeLectures() {
  return (
    <>
      <Header />
      <Stack />
      <LectureCard />
      <LectureCard />
      <LectureCard />
      <LectureCard />
      <LectureCard />
      <Stack />
      <Footer />
    </>
  );
}

export default WholeLectures;
