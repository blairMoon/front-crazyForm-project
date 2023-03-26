import Cookies from 'js-cookie';

export function getAccessToken() {
  const access = Cookies.get('access');
  console.log('Token before removal:', access);
  if (!access) throw new Error('No token found');
  return access;
}
export function getRefreshToken() {
  const refresh = Cookies.get('refresh');
  if (!refresh) throw new Error('No refresh token found');
  return refresh;
}

export const removeAccessToken = () => {
  Cookies.remove('access');
  Cookies.remove('refresh');
};

// export const logout = async () => {
//   try {
//     const response = await fetch(
//       'http://127.0.0.1:8000/api/v1/users/jwttoken',
//       {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${getAccessToken()}`,
//         },
//       }
//     );

//     if (response.ok) {
//       removeAccessToken();
//     } else {
//       throw new Error(`Logout failed: ${response.statusText}`);
//     }
//   } catch (error) {
//     console.error('Logout error:', error);
//   }
// };
