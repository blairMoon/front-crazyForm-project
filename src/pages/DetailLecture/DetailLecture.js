import React from 'react';
import { useParams } from 'react-router-dom';
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import { getLectureDetail } from '../../api';
const DetailLecture = () => {
  let { id } = useParams();
  const { isLoading, data } = useQuery(['lectureInfo'], () =>
    getLectureDetail(id)
  );
  if (data) {
    {
      console.log('data:', data);
    }
    if (data) {
      return (
        <div>
          <div>{id}번째페이지 입니당당당당다아</div>
          <h1>{data.lectureTitle}</h1>
          <h2>{data.lectureDescription}</h2>
          {/* <h2>{data.data[id].lectureDescription}</h2> */}
        </div>
      );
    }
  }
};
export default DetailLecture;
