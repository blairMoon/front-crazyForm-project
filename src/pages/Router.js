import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditMember from './EditMember/EditMember';

import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import WholeLectures from './WholeLectures/WholeLectures';
import DetailLecture from './DetailLecture/DetailLecture';
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
        <Route path="/mypage" element={<EditMember />} />
        <Route path="/lectures/" element={<WholeLectures />} />
        <Route path="/lectures/:id" element={<DetailLecture />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
