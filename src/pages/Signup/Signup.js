import React from 'react';
import { useForm } from 'react-hook-form';
import SignupForm from '../../components/Signup/SignupForm';

import css from './Signup.module.scss';
//`${css.movieName} ${css.show1}`
function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch('example')); // you can watch individual input by pass the name of the input

  return (
    <div className={css.body}>
      <h1>회원가입</h1>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>아이디</label>
        <div className={css.idContainer}>
          <input
            className={css.input}
            defaultValue="test"
            {...register('example')}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <button className={css.button}>아이디 중복확인</button>
        </div>
        <label>비밀번호</label>
        <input
          type="password"
          className={css.input}
          {...register('exampleRequired', { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <p>This field is required</p>}
        <label>비밀번호 확인</label>
        <input
          type="password"
          className={css.input}
          {...register('exampleRequired', { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <p>This field is required</p>}
        <label>이름</label>
        <input
          className={css.input}
          {...register('exampleRequired', { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <p>This field is required</p>}
        <label>닉네임</label>
        <input
          className={css.input}
          {...register('exampleRequired', { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <p>This field is required</p>}
        <label>생년월일</label>
        <input
          type="date"
          className={css.input}
          {...register('exampleRequired', { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <p>This field is required</p>}
        <label>성별</label>
        <div className={css.flexContainer}>
          <div className={css.genderContainer}>
            <label for="male" className={css.genderlabel}>
              남자
            </label>
            <input
              id="male"
              type="radio"
              className={`${css.input} ${css.radioMargin}`}
              {...register('exampleRequired', { required: true })}
            />
          </div>
          <div className={css.genderContainer}>
            <label className={css.genderlabel} for="famale">
              여자
            </label>
            <input
              id="famale"
              type="radio"
              className={`${css.input} ${css.radioMargin}`}
              {...register('exampleRequired', { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <p>This field is required</p>}
          </div>
        </div>
        <label for="famale">전화번호</label>
        <input
          type="tel"
          className={css.input}
          {...register('exampleRequired', { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <p>This field is required</p>}
        <label>이용약관 문의</label>
        <div className={css.flex}>
          <label className={css.genderlabel} for="TermsOfUse">
            이용약관에 동의하십니까???
          </label>
          <input
            id="TermsOfUse"
            type="checkbox"
            className={`${css.checkbox} ${css.radioMargin}`}
            {...register('exampleRequired', { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <p>This field is required</p>}
        </div>
        <input className={css.input} type="submit" />
      </form>
    </div>
  );
}

export default Signup;
