import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../useUser';

export default function LoginOnlyPage() {
  const { isLoggedIn, userLoading, user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading) {
      if (!isLoggedIn) {
        navigate('/');
      }
    }
  }, [userLoading, isLoggedIn, user]);
  return;
}
