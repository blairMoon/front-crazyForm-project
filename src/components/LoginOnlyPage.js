import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../useUser';

export default function LoginOnlyPage(data) {
  const { isLoggedIn, userLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading) {
      if (!isLoggedIn) {
        navigate('/');
        console.log(data);
      }
    }
  }, [userLoading, isLoggedIn]);
  return;
}
