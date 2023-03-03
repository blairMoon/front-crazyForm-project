import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Login.module.scss';

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div className={css.Container}>
      <div className={css.Wrapper}>
        <div className={css.TopBox}>
          <h1>tripleS</h1>
          <form onSubmit={handleSubmit}>
            <div className={css.IdBox}>
              <input
                placeholder="아이디"
                type="text"
                id="username-input"
                value={username}
                onChange={event => setUsername(event.target.value)}
              />
            </div>
            <div className={css.PasswordBox}>
              <input
                placeholder="비밀번호"
                type="password"
                id="password-input"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            <button type="submit">로그인</button>
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
