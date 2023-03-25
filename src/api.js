import axios from 'axios';
import Cookies from 'js-cookie';

export const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  // baseURL: 'http://101.101.216.129:8000/api/v1/',
  headers: {
    'X-CSRFToken': localStorage.getItem('csrftoken'),
    Jwt: Cookies.get('token'),
  },
  withCredentials: true,
});

export async function userNameLogin({ username, password }) {
  const response = await fetch('http://127.0.0.1:8000/api/v1/users/jwttoken ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
    credentials: 'include',
  });

  if (response.ok) {
    const data = await response.json();
    const token = data.token;
    Cookies.set('token', token);
    return true;
  } else {
    const { message } = await response.json();
    throw new Error(message);
  }
}

export const signUpUser = data => {
  return instance.post('users/', data).then(res => res.data);
};

export const getMyProfile = () => {
  return instance.get('users/myprofile').then(res => res.data);
};
export const putMyProfile = () => {
  return instance.put('users/myprofile').then(res => res.data);
};
export const changeProfileUser = data => {
  return instance.put('users/myprofile', data).then(res => res.data);
};

export const getLectureInfo = () => {
  return instance.get(`users/myprofile`).then(res => res.data);
};

export const getLectureDetail = page => {
  return instance.get(`lectures/${page}`).then(res => res.data);
};

export const getLectureAndCategoryAndSearch = async ({ queryKey }) => {
  const [, bigCategory, smallCategory, page, searchName] = queryKey;

  if (searchName) {
    return await instance
      .get(
        `lectures/${bigCategory}/${smallCategory}/?page=${page}&search=${searchName}`
      )
      .then(res => res.data);
  } else {
    return await instance
      .get(`lectures/${bigCategory}/${smallCategory}/?page=${page}`)
      .then(res => res.data);
  }
};
export const postReview = ({ lectureNum, data }) => {
  return instance.post(`reviews/${lectureNum}`, data).then(res => res.data);
};

export const postReply = ({ lectureNum, reviewNum, data }) => {
  return instance
    .post(`reviews/${lectureNum}/${reviewNum}`, data)
    .then(res => res.data);
};
export const registerLecture = lectureNum => {
  return instance
    .put(`users/calculated-lectures/${lectureNum}/`, '')
    .then(res => res.status);
};
export const fetchVideoList = async ({ queryKey }) => {
  const [, lectureId, num] = queryKey;
  return await instance
    .get(`videos/lectures/${lectureId}/${num}`)
    .then(res => res.data);
};
