import React from 'react';
import SignupForm from '../../components/Signup/SignupForm';
import Header from '../../components/Header/Header';
import css from './Signup.module.scss';

function Signup() {
  return (
    <>
      <Header />
      <div className={css.container}>
        <div className={css.signUpTitle}>
          <span>회원가입 </span>
        </div>
        <div className={css.formDiv}>
          <form className={css.signFormTag}>
            <div className={css.idContainer}>
              <label className={css.label}>아이디</label>
              <div className={css.dividcontainer}>
                <input className={css.useId} type="text" />
                <button className={css.duplicationId}>아이디중복체크</button>
              </div>
            </div>
            <SignupForm labelName={'비밀번호'} typeName={'password'} />
            <SignupForm labelName={'이름'} typeName={'text'} />
            <SignupForm labelName={'닉네임'} typeName={'text'} />
            <SignupForm labelName={'이메일'} typeName={'text'} />
            <SignupForm labelName={'생년월일'} typeName={'date'} />
            <div className={css.genderWholeContainer}>
              <label>성별</label>
              <div className={css.genderContainer}>
                <SignupForm
                  className={css.man}
                  labelName={'남자'}
                  typeName={'radio'}
                  gender={'gender'}
                />
                <SignupForm
                  className={css.man}
                  labelName={'여자'}
                  typeName={'radio'}
                  gender={'gender'}
                />
              </div>
            </div>
            <SignupForm labelName={'전화번호'} typeName={'tel'} />
            <button>가입하기</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
