import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { isLoggedInVar } from '../../apollo';

import { userIdLogin } from '../../api';
import { useMutation } from '@tanstack/react-query';

const LoginPage = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const mutation = useMutation(userIdLogin, {
    onMutate: () => {
      console.log('mutation start...');
    },
    onSuccess: () => {
      console.log('API CALL SUCCESS');
      isLoggedInVar(true);
    },
    onError: () => {
      console.log('API CALL ERROR');
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = event => {
    event.preventDefault();
    mutation.mutate({ username, password });
  };

  const onchange = event => {
    const { name, value } = event.currentTarget;
    console.log(name);
    if (name === 'username') {
      setUserName(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className={css.Container}>
      <div className={css.Wrapper}>
        <div className={css.TopBox}>
          <h1>Login</h1>
          <form onSubmit={onSubmit} className={css.Form}>
            <div>
              <input
                className={css.IdPassword}
                placeholder="아이디"
                name="userName"
                type="text"
                onChange={onchange}
                {...register('userName', {
                  required: true,
                  maxLength: 20,
                })}
              />
              {errors.userId && errors.userId.type === 'required' && (
                <p>아이디를 입력하세요!</p>
              )}
              {errors.userId && errors.userId.type === 'maxLength' && (
                <p>20자 이하로 입력하세요.</p>
              )}
            </div>
            <div>
              <input
                className={css.IdPassword}
                placeholder="비밀번호"
                name="password"
                type="password"
                onChange={onchange}
                {...register('password', {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
              />
              {errors.password && errors.password.type === 'required' && (
                <p>비밀번호를 입력하세요!</p>
              )}
              {errors.password && errors.password.type === 'minLength' && (
                <p>6자 이상 20자 이하로 입력하세요.</p>
              )}
              {errors.password && errors.password.type === 'maxLength' && (
                <p>6자 이상 20자 이하로 입력하세요.</p>
              )}
            </div>
            <button type="submit" value="로그인" className={css.Button}>
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

export default LoginPage;
