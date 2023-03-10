export function getAccessToken() {
  const token = window.localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }
  return token;
}
