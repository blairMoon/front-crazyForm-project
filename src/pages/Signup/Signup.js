import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import Header from '../../components/Header/Header';
import css from '../EditMember/EditMember.module.scss';

import { isLoggedInVar } from '../../apollo';

import { signUpUser, instance } from '../../api';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const Signup = ({ initialValues, onSubmit }) => {
  const navigate = useNavigate();
  const mutation = useMutation(signUpUser, {
    onMutate: data => {
      console.log('mutation start...');
      console.log(data);
    },
    onSuccess: () => {
      console.log('API CALL success...');
      alert('회원가입에 성공하셨습니다');
      setTimeout(() => navigate('/login'), 1000);
    },
    onError: () => {
      console.log('API CALL error...');
    },
  });

  const checkUsename = id => {
    return instance
      .get(`users/@${id}`)
      .then(res => res.data)
      .then(res => alert(res));
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  const submitForm = data => {
    mutation.mutate(data);
  };
  const password = useRef();
  password.current = watch('password');

  return (
    <>
      <Header />
      <div className={css.Container}>
        <div className={css.Wrapper}>
          <div className={css.TopBox}>
            <h1 className={css.h1}>회원가입</h1>
            <form className={css.Form} onSubmit={handleSubmit(submitForm)}>
              <label>아이디</label>
              <div>
                <input
                  name="username"
                  className={css.Input}
                  {...register('username', {
                    required: true,
                    pattern: /^[a-z0-9]{5,20}$/,
                  })}
                />
              </div>
              <button
                className={css.button}
                onClick={() => checkUsename(watch('username'))}
              >
                아이디 중복확인
              </button>
              {errors.username && errors.username.type === 'required' && (
                <p className={css.p}>아이디는 필수 입력값입니다.</p>
              )}
              {errors.username && errors.username.type === 'pattern' && (
                <p className={css.p}>
                  아이디는 소문자와 숫자로만 이루어져야 합니다.
                </p>
              )}
              <label>비밀번호</label>
              <input
                name="password"
                type="password"
                autoComplete="off"
                className={css.Input}
                {...register('password', {
                  required: true,
                  pattern:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/,
                })}
              />
              {errors.password && errors.password.type === 'required' && (
                <p className={css.p}>비밀번호는 필수 입력값입니다.</p>
              )}
              {errors.password && errors.password.type === 'pattern' && (
                <p className={css.p}>
                  비밀번호는 8~20자 사이여야 하며 문자,숫자,특수문자를
                  조합해야합니다.
                </p>
              )}
              <label>비밀번호 확인</label>
              <input
                name="passwordCheck"
                type="password"
                autoComplete="off"
                className={css.Input}
                {...register('passwordCheck ', {
                  required: true,
                  pattern:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/,
                  validate: value => value === password.current,
                })}
              />
              {errors.passwordCheck &&
                errors.passwordCheck.type === 'required' && (
                  <p className={css.p}>비밀번호 확인은 필수 입력값입니다.</p>
                )}
              {errors.passwordCheck &&
                errors.passwordCheck.type === 'pattern' && (
                  <p>
                    비밀번호는 8~20자 사이여야 하며 문자,숫자,특수문자를
                    조합해야합니다.
                  </p>
                )}{' '}
              {errors.passwordCheck &&
                errors.passwordCheck.type === 'validate' && (
                  <p>비밀번호가 일치하지 않습니다.</p>
                )}
              <label>이름</label>
              <input
                name="name"
                className={css.Input}
                {...register('name', { required: true })}
              />
              {errors.name && (
                <p className={css.p}>이름은 필수 입력값입니다.</p>
              )}
              <label>닉네임</label>
              <input
                name="nickname"
                className={css.Input}
                {...register('nickname', { required: true })}
              />
              {errors.nickname && (
                <p className={css.p}>닉네임은 필수 입력 값입니다.</p>
              )}
              <label>생년월일</label>
              <input
                name="dateBirth"
                type="date"
                className={css.Input}
                {...register('dateBirth', { required: true })}
              />
              {errors.dateBirth && (
                <p className={css.p}>생년월일은 필수 입력 값입니다.</p>
              )}
              <label>성별</label>
              <div className={css.flexContainer}>
                <div className={css.genderContainer}>
                  <label htmlFor="male" className={css.genderlabel}>
                    남자
                  </label>
                  <input
                    name="gender"
                    id="male"
                    type="radio"
                    value="male"
                    className={`${css.radioMargin}`}
                    {...register('gender', { required: true })}
                  />
                </div>
                <div className={css.genderContainer}>
                  <label className={css.genderlabel} htmlFor="female">
                    여자
                  </label>
                  <input
                    name="gender"
                    id="female"
                    type="radio"
                    value="female"
                    className={`
                  
                  ${css.radioMargin}`}
                    {...register('gender', { required: true })}
                  />
                </div>
              </div>
              {errors.gender && (
                <p className={css.p}>성별은 필수 입력값입니다.</p>
              )}
              <label>전화번호</label>
              <input
                name="phoneNumber"
                type="tel"
                className={css.Input}
                {...register('phoneNumber', { required: true })}
              />
              {errors.phoneNumber && (
                <p className={css.p}>전화번호는 필수 입력 값입니다.</p>
              )}
              {errors.phoneNumber && errors.phoneNumber.type === 'pattern' && (
                <p className={css.p}>숫자만 입력가능합니다.</p>
              )}
              <label>이메일</label>
              <input
                name="email"
                type="text"
                className={css.Input}
                {...register('email', {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                })}
              />
              {errors.email && <p className={css.p}>이메일 형식이 아닙니다.</p>}
              <label>이용약관 문의</label>
              <div className={css.flex}>
                <label className={css.genderlabel} htmlFor="termsOfUse">
                  이용약관에 동의하십니까???
                </label>
                <input
                  name="termsOfUse"
                  id="termsOfUse"
                  type="checkbox"
                  className={`${css.checkbox} ${css.radioMargin}`}
                  {...register('termsOfUse', {
                    required: true,
                    pattern: /^[0-9]+$/,
                  })}
                />
              </div>
              {errors.termsOfUse && (
                <p className={css.p}>
                  이용약관에 동의히자 않으면 가입이 불가능합니다.
                </p>
              )}
              <button type="submit" className={css.Button}>
                가입하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
