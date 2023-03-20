import axios from 'axios';
import Cookies from 'js-cookie';

export const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  headers: {
    'X-CSRFToken': Cookies.get('csrftoken'),
    Jwt: Cookies.get('token'),
  },
  withCredentials: true,
});

export async function userNameLogin({ username, password }) {
  const response = await fetch('http://127.0.0.1:8000/api/v1/users/jwttoken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
    credentials: 'include',
  });

  if (response.ok) {
    const data = await response.json();

    Cookies.set('token', data.token, { expires: 7, httpOnly: true });
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

// export const getLectureInfo = (page, pageSize) => {
//   return instance.get(`lectures/?page=${page}`).then(res => res.data);
// };

export const getLectureDetail = page => {
  return instance.get(`lectures/${page}`).then(res => res.data);
};
// export const getLectureAndCategory = (
//   bigCategory,
//   smallCategory,
//   page,
//   pageSize
// ) => {
//   return instance
//     .get(`lectures/${bigCategory}/${smallCategory}/?page=${page}`)
//     .then(res => res.data);
// };
export const getLectureAndCategory = async ({ queryKey }) => {
  const [, bigCategory, smallCategory, page] = queryKey;
  const response = await instance.get(
    `lectures/${bigCategory}/${smallCategory}/?page=${page}`
  );
  return response.data;
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
// export const postReview = async ({ lectureNum, data }) => {
//   try {
//     const res = await instance.post(`reviews/${lectureNum}`, data);
//     return res.data;
//   } catch (error) {
//     throw new Error(error.response.data.message);
//   }
// };
