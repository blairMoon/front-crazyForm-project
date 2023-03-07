import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
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

export const signUpUser = ({ userId, password }) => {
  return instance
    .post('users/login', { userId, password })
    .then(res => res.data);
};
