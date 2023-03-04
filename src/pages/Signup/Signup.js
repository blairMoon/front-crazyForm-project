import React from 'react';
import { useForm } from 'react-hook-form';
import SignupForm from '../../components/Signup/SignupForm';

import css from './Signup.module.scss';

function Signup() {
  // const { register, watch } = useForm();
  // console.log(watch(''));
  return (
    <div className={css.container}>
      <div className={css.signUpTitle}>
        <span>회원가입 </span>
      </div>
      <div className={css.formDiv}>
        <form className={css.signFormTag}>
          <div className={css.idContainer}>
            <label className={css.label}>아이디</label>
            <div className={css.dividcontainer}>
              <input name={'id'} className={css.useId} type="text" />

              <button className={css.duplicationId}>아이디중복체크</button>
            </div>
          </div>
          <SignupForm
            name={'password'}
            labelName={'비밀번호'}
            typeName={'password'}
          />
          <SignupForm name={'name'} labelName={'이름'} typeName={'text'} />
          <SignupForm
            name={'nickname'}
            labelName={'닉네임'}
            typeName={'text'}
          />
          <SignupForm name={'email'} labelName={'이메일'} typeName={'text'} />
          <SignupForm name={'birth'} labelName={'생년월일'} typeName={'date'} />
          <div className={css.genderWholeContainer}>
            <label>성별</label>
            <div className={css.genderContainer}>
              <SignupForm
                name={'gender'}
                className={css.man}
                labelName={'남자'}
                typeName={'radio'}
              />
              <SignupForm
                name={'gender'}
                className={css.man}
                labelName={'여자'}
                typeName={'radio'}
              />
            </div>
          </div>
          <SignupForm labelName={'전화번호'} typeName={'tel'} />
          <button>가입하기</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
