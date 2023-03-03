import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { isLoggedInVar } from '../../apollo';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = event => {
    event.preventDefault();
    console.log('login click');
    isLoggedInVar(true);
  };

  return (
    <div className={css.Container}>
      <div className={css.Wrapper}>
        <div className={css.TopBox}>
          <h1>tripleS</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={css.IdBox}>
              <input
                placeholder="아이디"
                type="text"
                id="username-input"
                {...register('username', { required: true })}
              />
              {errors.username && <div>Username is required</div>}
            </div>
            <div className={css.PasswordBox}>
              <input
                placeholder="비밀번호"
                type="password"
                id="password-input"
                {...register('password', { required: true })}
              />
              {errors.password && <div>Password is required</div>}
            </div>
            <button type="submit" value="로그인">
              로그인
            </button>
          </form>
          <div className={css.Seperater}>
            <div></div>
            <span>간편로그인</span>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LoginPage;
