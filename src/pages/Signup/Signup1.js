import React from 'react';
import SignupForm from '../../components/Signup/SignupForm';

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
    <div className={css.Container}>
      <div className={css.Wrapper}>
        <div className={css.TopBox}>
          <h1>SignUp</h1>
          <form className={css.Form}>
            <div>
              <span>아이디</span>
              <input
                className={css.IdPassword}
                placeholder="아이디"
                name="username"
                type="text"
              />
            </div>
            <div>
              <input
                className={css.IdPassword}
                placeholder="비밀번호"
                name="password"
                type="password"
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
  );
}

export default Signup1;
