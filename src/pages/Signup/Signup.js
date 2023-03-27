import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import Header from '../../components/Header/Header';
import css from '../Signup/Signup.module.scss';

import { isLoggedInVar } from '../../apollo';

import { signUpUser, instance, instanceNotLogin } from '../../api';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const Signup = ({ initialValues, onSubmit }) => {
  const navigate = useNavigate();
  const [idCheck, setIdCheck] = useState('');
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
    return instanceNotLogin
      .get(`users/@${id}`)
      .then(res => res.data)
      .then(res => setIdCheck(res));
  };

  const {
    getValues,
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
      <div className={css.Container}>
        <div className={css.Wrapper}>
          <div className={css.TopBox}>
            <h2 className={css.h2}>
              <img src="/images/logo.png" alt="logo" width="200" />
            </h2>

            <h1 className={css.h1}>회원가입</h1>
            <form className={css.Form} onSubmit={handleSubmit(submitForm)}>
              <h6 className={css.h6}>모든 값은 필수입력 값입니다.</h6>
              <label className={`${css.topborder} ${css.label}`}>아이디</label>
              <div className={css.buttonflex}>
                <input
                  name="username"
                  placeholder="아이디를 입력해주세용"
                  className={css.Input}
                  {...register('username', {
                    required: true,
                    pattern: /^[a-z0-9]{5,20}$/,
                  })}
                />

                <button
                  type="button"
                  className={css.checkButton}
                  onClick={() => checkUsename(watch('username'))}
                >
                  아이디 <br />
                  중복확인
                </button>
              </div>
              {errors.username && errors.username.type === 'required' && (
                <p className={css.errors}>아이디는 필수 입력값입니다.</p>
              )}
              {errors.username && errors.username.type === 'pattern' && (
                <p className={css.errors}>
                  아이디는 소문자와 숫자로만 이루어져야 합니다.
                </p>
              )}
              <label className={css.label}>비밀번호</label>
              <input
                placeholder="비밀번호를 입력해주세용"
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
                <p className={css.errors}>비밀번호는 필수 입력값입니다.</p>
              )}
              {errors.password && errors.password.type === 'pattern' && (
                <p className={css.errors}>
                  비밀번호는 8~20자 사이여야 하며 문자,숫자,특수문자를
                  조합해야합니다.
                </p>
              )}
              <label className={css.label}>비밀번호 확인</label>
              <input
                name="passwordCheck"
                placeholder="비밀번호를 한번 더 치세용"
                type="password"
                autoComplete="off"
                className={css.Input}
                {...register('passwordCheck', {
                  required: true,
                  validate: {
                    check: val => {
                      // console.log(val);
                      console.log(getValues('password'));
                      if (getValues('password') !== val) {
                        return 'error';
                      }
                    },
                  },
                })}
              />

              {errors.passwordCheck && (
                <p className={css.errors}>비밀번호가 틀립니다.</p>
              )}
              <label className={css.label}>이름</label>
              <input
                placeholder="이름을 입력해주세용"
                name="name"
                className={css.Input}
                {...register('name', { required: true })}
              />
              {errors.name && (
                <p className={css.errors}>이름은 필수 입력값입니다.</p>
              )}

              <label className={css.label}>생년월일</label>
              <input
                name="dateBirth"
                type="date"
                className={css.Input}
                {...register('dateBirth', { required: true })}
              />
              {errors.dateBirth && (
                <p className={css.errors}>생년월일은 필수 입력 값입니다.</p>
              )}
              <label className={css.label}>성별</label>
              <div className={css.flexContainer}>
                <div className={css.genderContainer}>
                  <input
                    name="gender"
                    id="male"
                    type="radio"
                    value="male"
                    className={`${css.radioMargin}`}
                    {...register('gender', { required: true })}
                  />
                  <label htmlFor="male" className={css.genderlabel}>
                    남자
                  </label>
                </div>
                <div className={css.genderContainer}>
                  <input
                    name="gender"
                    id="female"
                    type="radio"
                    value="female"
                    className={` ${css.radioMargin}`}
                    {...register('gender', { required: true })}
                  />
                  <label className={css.genderlabel} htmlFor="female">
                    여자
                  </label>
                </div>
              </div>
              {errors.gender && (
                <p className={css.errors}>성별은 필수 입력값입니다.</p>
              )}
              <label className={css.label}>전화번호</label>
              <input
                placeholder="전화번호를 입력해주세용"
                name="phoneNumber"
                type="tel"
                className={css.Input}
                {...register('phoneNumber', { required: true })}
              />
              {errors.phoneNumber && (
                <p className={css.errors}>전화번호는 필수 입력 값입니다.</p>
              )}
              {errors.phoneNumber && errors.phoneNumber.type === 'pattern' && (
                <p className={css.p}>숫자만 입력가능합니다.</p>
              )}
              <label className={css.label}>이메일</label>
              <input
                placeholder="이메일를 입력해주세용"
                name="email"
                type="text"
                className={css.Input}
                {...register('email', {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className={css.errors}>이메일 형식이 아닙니다.</p>
              )}
              <label className={`${css.label} ${css.question}`}>
                이용약관 문의
              </label>
              <div className={css.flex}>
                <label className={css.answer} htmlFor="termsOfUse">
                  이용약관에 동의합니다.
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
                <p className={css.errors}>
                  이용약관에 동의하지 않으면 가입이 불가능합니다.
                </p>
              )}
              <div className={css.buttonContainer}>
                <button type="submit" className={css.Button}>
                  가입하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
