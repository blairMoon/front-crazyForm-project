import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditMember from './EditMember/EditMember';
import UserInfoPage from './Userinfopage/Userinfopage';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import WholeLectures from './WholeLectures/WholeLectures';
import DetailLecture from './DetailLecture/DetailLecture';
import { useReactiveVar } from '@apollo/client';
import { isLoggedInVar } from '../apollo';
import Layout from '../components/Layout/Layout';
import MyLecture from '../components/Mylecturepage/Mylecture';
import Video from './Lectureplaypage/Lectureplay';

function Router() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem('isLoggedIn');
  //   if (isLoggedIn === 'true') {
  //     isLoggedInVar(true);
  //   }

  //   const previousPageUrl = localStorage.getItem('previousPageUrl');
  //   if (previousPageUrl) {
  //     localStorage.removeItem('previousPageUrl');
  //     window.location.href = previousPageUrl;
  //   }
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Layout>
                <Home />
              </Layout>
            ) : (
              <Layout>
                <Login />
              </Layout>
            )
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/mypage"
          element={
            <Layout>
              <EditMember />
            </Layout>
          }
        />
        {/* <Route path="/lectures/?page=:page" element={<WholeLectures />} /> */}
        <Route
          path="/lectures/:bigCategory/:smallCategory"
          element={
            <Layout>
              <WholeLectures />
            </Layout>
          }
        />
        <Route
          path="/lectures/:id"
          element={
            <Layout>
              <DetailLecture />
            </Layout>
          }
        />
        <Route
          path="/userinfo"
          element={
            <Layout>
              <UserInfoPage />
            </Layout>
          }
        />
        {/* <Route
          path="/mylecture"
          element={
            <Layout>
              <MyLecture />
            </Layout>
          }
        /> */}
        <Route path="/lectureplay/:lectureId/:videoId" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
