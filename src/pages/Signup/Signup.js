import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import Header from '../../components/Header/Header';
import css from './Signup.module.scss';
import { valueToObjectRepresentation } from '@apollo/client/utilities';
//`${css.movieName} ${css.show1}`
function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log('data', data);
  };
  const password = useRef();
  password.current = watch('password');

  return (
    <div className={css.body}>
      <h1>회원가입</h1>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <label>아이디</label>
        <div className={css.idContainer}>
          <input
            name="UserId"
            className={css.input}
            {...register('UserId', {
              required: true,
              pattern: /^[a-z0-9]{10,20}$/,
            })}
          />

          <button className={css.button}>아이디 중복확인</button>
        </div>
        {errors.id && errors.id.type === 'required' && (
          <p className={css.p}>아이디는 필수 입력값입니다.</p>
        )}
        {errors.id && errors.id.type === 'pattern' && (
          <p className={css.p}>아이디는 소문자와 숫자로만 이루어져야 합니다.</p>
        )}
        <label>비밀번호</label>
        <input
          name="Password"
          type="password"
          className={css.input}
          {...register('Password', {
            required: true,
            pattern:
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/,
          })}
        />
        {errors.password && errors.password.type === 'required' && (
          <p>비밀번호는 필수 입력값입니다.</p>
        )}
        {errors.password && errors.password.type === 'pattern' && (
          <p>
            비밀번호는 8~20자 사이여야 하며 문자,숫자,특수문자를 조합해야합니다.
          </p>
        )}
        <label>비밀번호 확인</label>
        <input
          name="passwordCheck"
          type="password"
          className={css.input}
          {...register('passwordCheck ', {
            required: true,
            pattern:
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/,
            validate: value => value === password.current,
          })}
        />

        {errors.passwordCheck && errors.passwordCheck.type === 'required' && (
          <p>비밀번호 확인은 필수 입력값입니다.</p>
        )}
        {/* {errors.passwordCheck && errors.passwordCheck.type === 'pattern' && (
          <p>
            비밀번호는 8~20자 사이여야 하며 문자,숫자,특수문자를 조합해야합니다.
          </p>
        )} */}
        {errors.passwordCheck && errors.passwordCheck.type === 'validate' && (
          <p>비밀번호가 일치하지 않습니다.</p>
        )}
        <label>이름</label>
        <input
          name="name"
          className={css.input}
          {...register('name', { required: true })}
        />

        {errors.name && <p>이름은 필수 입력값입니다.</p>}
        <label>닉네임</label>
        <input
          name="nickname"
          className={css.input}
          {...register('nickname', { required: true })}
        />
        {errors.nickname && <p>닉네임은 필수 입력 값입니다.</p>}
        <label>생년월일</label>
        <input
          name="birth"
          type="date"
          className={css.input}
          {...register('birth', { required: true })}
        />

        {errors.birth && <p>생년월일은 필수 입력 값입니다.</p>}
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
              value="man"
              className={`${css.input} ${css.radioMargin}`}
              {...register('gender', { required: true })}
            />
          </div>
          <div className={css.genderContainer}>
            <label className={css.genderlabel} htmlFor="famale">
              여자
            </label>
            <input
              name="gender"
              id="famale"
              type="radio"
              value="female"
              className={`${css.input} ${css.radioMargin}`}
              {...register('gender', { required: true })}
            />
          </div>
        </div>

        {errors.gender && <p>성별은 필수 입력값입니다.</p>}
        <label>전화번호</label>
        <input
          name="phoneNumber"
          type="tel"
          className={css.input}
          {...register('phoneNumber', { required: true })}
        />

        {errors.phoneNumber && <p>전화번호는 필수 입력 값입니다.</p>}
        {errors.phoneNumber && errors.phoneNumber.type === 'pattern' && (
          <p>숫자만 입력가능합니다.</p>
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
            className={`${css.checkbox} ${css.radioMargin}`}
            {...register('termsOfUse', { required: true, pattern: /^[0-9]+$/ })}
          />
        </div>
        {errors.termsOfUse && (
          <p>이용약관에 동의히자 않으면 가입이 불가능합니다.</p>
        )}
        <input className={css.input} type="submit" />
      </form>
    </div>
  );
}

export default Signup;
