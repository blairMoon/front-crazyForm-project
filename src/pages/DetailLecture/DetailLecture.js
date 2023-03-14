import React from 'react';
import { useParams } from 'react-router-dom';
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import { getLectureInfo } from '../../api';
const DetailLecture = () => {
  const { isLoading, data } = useQuery(['lectureInfo'], getLectureInfo);
  let { id } = useParams();
  if (data) {
    {
      console.log(data.data);
    }
    return (
      <div>
        <div>{id}번째페이지 입니당당당당다아</div>
        <h1>{data.data[id].lectureTitle}</h1>
        <h2>{data.data[id].lectureDescription}</h2>
      </div>
    );
  }
};
export default DetailLecture;
