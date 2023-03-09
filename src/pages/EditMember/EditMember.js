import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
// import { getUserFeeds } from '../../api';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import css from './EditMember.module.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

// import { getMyProfile } from '../../api';
import { QueryClient, useQuery, useQueryClient } from '@tanstack/react-query';
// import LoginOnlyPage from '../../components/LoginOnlyPage';
import {
  getMyProfile,
  userNameLogin,
  changeProfileUser,
  instance,
} from '../../api';

import { useMutation } from '@tanstack/react-query';
const EditMember = () => {
  // useEffect(() => {}, [data.name]);
  // LoginOnlyPage();
  const { isLoading, data } = useQuery(['myprofile'], getMyProfile);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const mutation = useMutation(changeProfileUser, {
    onMutate: data => {
      console.log('mutation start...');
      console.log(data);
    },
    onSuccess: () => {
      console.log('API CALL success...');
    },
    onError: () => {
      console.log('API CALL error...');
    },
  });

  const submitForm = data => {
    mutation.mutate(data);
  };
  const password = useRef();
  password.current = watch('password');

  const checkUsename = id => {
    return instance
      .get(`users/@${id}`)
      .then(res => res.data)
      .then(res => alert(res));
  };
  // console.log('data', data);
  if (data) {
    return (
      <>
        <Header />
        <div className={css.Container}>
          <div className={css.Wrapper}>
            <div className={css.TopBox}>
              <h1 className={css.h1}>회원정보수정</h1>
              <form className={css.Form} onSubmit={handleSubmit(submitForm)}>
                <label>아이디</label>
                <div>
                  {console.log(isLoading)}
                  <input
                    name="username"
                    className={css.Input}
                    defaultValue={data.username}
                    readOnly
                    {...register('username', {
                      required: true,
                      pattern: /^[a-z0-9]{5,20}$/,
                    })}
                  ></input>
                </div>

                <button
                  type="button"
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
                {errors.password && errors.password.type === 'pattern' && (
                  <p className={css.p}>
                    비밀번호는 8~20자 사이여야 하며 문자,숫자,특수문자를
                    조합해야합니다.
                  </p>
                )}
                {errors.passwordCheck &&
                  errors.passwordCheck.type === 'pattern' && (
                    <p>
                      비밀번호는 8~20자 사이여야 하며 문자,숫자,특수문자를
                      조합해야합니다.
                    </p>
                  )}
                {errors.passwordCheck &&
                  errors.passwordCheck.type === 'validate' && (
                    <p>비밀번호가 일치하지 않습니다.</p>
                  )}
                <label>이름</label>
                <input
                  name="name"
                  defaultValue={data.name}
                  className={css.Input}
                  {...register('name', { required: true })}
                />

                {errors.name && (
                  <p className={css.p}>이름은 필수 입력값입니다.</p>
                )}
                <label>닉네임</label>
                <input
                  name="nickname"
                  defaultValue={data.nickname}
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
                  defaultValue={data.dateBirth}
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
                      checked={data.gender === 'male' ? true : false}
                      name="gender"
                      id="male"
                      type="radio"
                      defaultValue="male"
                      className={`${css.radioMargin}`}
                      {...register('gender', { required: true })}
                    />
                  </div>
                  <div className={css.genderContainer}>
                    <label className={css.genderlabel} htmlFor="female">
                      여자
                    </label>
                    <input
                      checked={data.gender === 'female' ? true : false}
                      name="gender"
                      id="female"
                      type="radio"
                      defaultValue="female"
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
                  defaultValue={data.phoneNumber}
                  {...register('phoneNumber', { required: true })}
                />

                {errors.phoneNumber && (
                  <p className={css.p}>전화번호는 필수 입력 값입니다.</p>
                )}
                {errors.phoneNumber &&
                  errors.phoneNumber.type === 'pattern' && (
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
                  defaultValue={data.email}
                />
                {errors.email && (
                  <p className={css.p}>이메일 형식이 아닙니다.</p>
                )}
                <label>이용약관 문의</label>
                <div className={css.flex}>
                  <label className={css.genderlabel} htmlFor="termsOfUse">
                    이용약관에 동의하십니까???
                  </label>
                  <input
                    name="termsOfUse"
                    id="termsOfUse"
                    type="checkbox"
                    checked={true}
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
                <button type="submit" value="수정하기" className={css.Button}>
                  수정하기
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default EditMember;
