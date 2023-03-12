import React from 'react';
import { useParams } from 'react-router-dom';
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import { getLectureInfo } from '../../api';
const DetailLecture = () => {
  const { isLoading, data } = useQuery(['lectureInfo'], getLectureInfo);
  let { id } = useParams();
  if (data) {
    {
      console.log(data);
    }
    return (
      <div>
        <div>{id}</div>
        <div>{data.results[id].gu}</div>
        <div>{data.results[id].title}</div>
        <div>{data.results[id].description}</div>
      </div>
    );
  }
};
export default DetailLecture;
