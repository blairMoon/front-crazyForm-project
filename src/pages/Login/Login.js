import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Login.module.scss';
import { Link } from 'react-router-dom';

import { isLoggedInVar } from '../../apollo';

const handleSubmit = event => {
  event.preventDefault();
  console.log('login click');
  isLoggedInVar(true);
};

const LoginPage = () => {
  return (
    <div className={css.Container}>
      <div className={css.Wrapper}>
        <div className={css.TopBox}>
          <h1>tripleS</h1>
          <form onSubmit={handleSubmit} class={css.Form}>
            <div>
              <input
                placeholder="아이디"
                type="text"
                id="username-input"
                class={css.IdPassword}
              />
            </div>
            <div>
              <input
                class={css.IdPassword}
                placeholder="비밀번호"
                type="password"
                id="password-input"
              />
            </div>
            <button type="submit" value="로그인" class={css.Button}>
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
