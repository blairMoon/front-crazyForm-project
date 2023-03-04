import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditMember from './EditMember/EditMember';

import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Signup1 from './Signup/Signup1';

import { useReactiveVar } from '@apollo/client';
import { isLoggedInVar } from '../apollo';

function Router() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={isLoggedIn ? <Home /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/editingPage" element={<EditMember />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
