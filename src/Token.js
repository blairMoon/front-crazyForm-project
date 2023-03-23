import Cookies from 'js-cookie';

export function getAccessToken() {
  const token = Cookies.get('token');
  console.log('Token before removal:', token);
  if (!token) {
    throw new Error('No token found');
  }
  return token;
}

export const removeAccessToken = () => {
  Cookies.remove('token', {
    path: '/',
    sameSite: 'Lax',
  });
};

export const removeSessionId = () => {
  Cookies.remove('sessionid', {
    path: '/',
    domain: '127.0.0.1',
    sameSite: 'Lax',
  });
};

export const logout = async () => {
  try {
    const response = await fetch('https://your-domain.com/api/logout', {
      method: 'POST',
      headers: {
        'X-CSRFToken': localStorage.getItem('csrftoken'),
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    if (response.ok) {
      removeAccessToken();
      removeSessionId();
      console.log('Logout successful');
    } else {
      console.error('Logout failed:', response.statusText);
    }
  } catch (error) {
    console.error('Logout error:', error);
  }
};
