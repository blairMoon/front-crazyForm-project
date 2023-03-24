import Cookies from 'js-cookie';

export function getAccessToken() {
  const token = Cookies.get('token');
  console.log('Token before removal:', token);
  if (!token) throw new Error('No token found');
  return token;
}

export const removeAccessToken = () => {
  Cookies.remove('token');
  Cookies.remove('sessionid');
};

export const removeSessionId = () => {
  Cookies.remove('sessionid', {
    path: '/',
    domain: '127.0.0.1',
    sameSite: 'Lax',
  });
};
export const logout = () => {
  Cookies.remove('sessionid');
  Cookies.remove('token');
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
