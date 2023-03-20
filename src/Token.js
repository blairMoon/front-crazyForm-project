import Cookies from 'js-cookie';

export function getAccessToken() {
  const token = Cookies.get('token');
  if (!token) {
    throw new Error('No token found');
  }
  return token;
}
export const removeAccessToken = () => {
  Cookies.remove('token');
};
