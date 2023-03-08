import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    'X-CSRFToken': Cookies.get('csrftoken'),
  },
  withCredentials: true,
});

export const userNameLogin = ({ username, password }) => {
  return instance
    .post('users/login', { username, password })
    .then(res => res.data);
};

export const signUpUser = data => {
  return instance.post('users/', data).then(res => res.data);
};

export const getUserFeeds = ({ queryKey }) => {
  let data = queryKey[1];

  return instance
    .get('../public/data/userData.json', data)
    .then(res => res.data);
};
