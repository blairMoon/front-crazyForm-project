import React from 'react';
import SignupForm from '../../components/Signup/SignupForm';
import Header from '../../components/Header/Header';
import css from './Signup1.module.scss';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Signup1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  // const password = useRef();
  // password.current = watch('password');

  const onSubmit = data => {
    console.log('data', data);
  };

  return (
    <>
      <Header />
      <div className={css.Container}>
        <div className={css.Wrapper}>
          <div className={css.TopBox}>
            <h1>SignUp</h1>
            <form className={css.Form}>
              <div>
                <label>아이디</label>
                <input
                  className={css.IdPassword}
                  placeholder="아이디"
                  name="username"
                  type="text"
                />
              </div>
              <div>
                <label>비밀번호</label>
                <input
                  className={css.IdPassword}
                  placeholder="비밀번호"
                  name="password"
                  type="password"
                />
              </div>
              <div>
                <label>이름</label>
                <input
                  className={css.IdPassword}
                  placeholder="이름"
                  name="username"
                  type="text"
                />
              </div>
              <div>
                <label>닉네임</label>
                <input
                  className={css.IdPassword}
                  placeholder="닉네임"
                  name="username"
                  type="text"
                />
              </div>
              <div>
                <div>이메일</div>
                <input
                  className={css.Email}
                  placeholder="이메일"
                  name="email"
                  type="text"
                />
                @
                <select name="email_select" className={css.Email2}>
                  <option value="gmail.com"> gmail.com </option>
                  <option value="naver.com"> naver.com </option>
                  <option value="write"> 직접 입력 </option>
                </select>
              </div>
              <div>
                <label>생년월일</label>
                <input
                  className={css.IdPassword}
                  placeholder="생년월일"
                  name="birthday"
                  type="text"
                />
              </div>
              <button type="submit" value="회원가입" className={css.Button}>
                회원가입
              </button>
            </form>
            <div className={css.Seperater}>
              <div></div>
              <Link to="/login">로그인</Link>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup1;
