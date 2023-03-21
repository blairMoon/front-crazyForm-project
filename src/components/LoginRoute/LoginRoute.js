import React from 'react';
import { useLocation } from 'react-router-dom';
import LoginPage from '../.././pages/Login/Login';

function LoginRoute() {
  const location = useLocation();
  const redirectTo = location.state?.from || '/';

  return <LoginPage redirectTo={redirectTo} />;
}

export default LoginRoute;
