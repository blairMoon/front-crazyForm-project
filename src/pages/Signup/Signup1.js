import React from 'react';

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
            <form onSubmit={handleSubmit(onSubmit)} className={css.Form}>
              <div>
                <label>아이디</label>
                <input
                  className={css.IdPassword}
                  placeholder="아이디"
                  name="username"
                  type="text"
                  {...register('username', {
                    required: true,
                    maxLength: 20,
                  })}
                />
                {errors.username && errors.username.type === 'required' && (
                  <p>아이디를 입력하세요!</p>
                )}
                {errors.username && errors.username.type === 'maxLength' && (
                  <p>6자 이하로 입력하세요.</p>
                )}
              </div>
              <div>
                <label>비밀번호</label>
                <input
                  className={css.IdPassword}
                  placeholder="비밀번호"
                  name="password"
                  type="password"
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
              <div>
                <label>이름</label>
                <input
                  className={css.IdPassword}
                  placeholder="이름"
                  name="name"
                  type="text"
                  {...register('name', {
                    required: true,
                    maxLength: 6,
                  })}
                />
                {errors.name && errors.name.type === 'required' && (
                  <p>이름을 입력하세요!</p>
                )}
                {errors.name && errors.name.type === 'maxLength' && (
                  <p>6자 이하로 입력하세요.</p>
                )}
              </div>
              <div>
                <label>닉네임</label>
                <input
                  className={css.IdPassword}
                  placeholder="닉네임"
                  name="nickname"
                  type="text"
                  {...register('nickname', {
                    required: true,
                    maxLength: 10,
                  })}
                />
                {errors.nickname && errors.nickname.type === 'required' && (
                  <p>닉네임을 입력하세요!</p>
                )}
                {errors.nickname && errors.nickname.type === 'maxLength' && (
                  <p>10자 이하로 입력하세요.</p>
                )}
              </div>
              <div>
                <div>이메일</div>
                <input
                  className={css.Email}
                  placeholder="이메일"
                  name="email"
                  type="text"
                  {...register('email', {
                    required: true,
                    maxLength: 15,
                  })}
                />
                @
                <select name="email_select" className={css.Email2}>
                  <option value="gmail.com"> gmail.com </option>
                  <option value="naver.com"> naver.com </option>
                  <option value="write"> 직접 입력 </option>
                </select>
                {errors.email && errors.email.type === 'required' && (
                  <p>이메일을 입력하세요!</p>
                )}
                {errors.email && errors.email.type === 'maxLength' && (
                  <p>15자 이하로 입력하세요.</p>
                )}
              </div>
              <div>
                <label>생년월일</label>
                <input
                  className={css.IdPassword}
                  placeholder="생년월일"
                  name="birthday"
                  type="text"
                  {...register('birthday', {
                    required: true,
                    maxLength: 15,
                  })}
                />
                {errors.birthday && errors.birthday.type === 'required' && (
                  <p>생일을 입력하세요!</p>
                )}
                {errors.birthday && errors.birthday.type === 'maxLength' && (
                  <p>15자 이하로 입력하세요.</p>
                )}
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
