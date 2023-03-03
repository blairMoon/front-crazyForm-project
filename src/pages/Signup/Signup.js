import React from 'react';

import css from './Signup.module.scss';

function Signup() {
  return (
    <div className={css.container}>
      <div className={css.signUpTitle}>
        <span>회원가입 </span>
      </div>
      <div className={css.formDiv}>
        <form className={css.signFormTag}>
          <label> 아이디</label>
          <input className={css.useId} type="text" />
          <label> 비밀번호</label>
          <input type="password" />
          <label> 이름</label>
          <input className={css.name} type="text" />
          <label> 이메일</label>
          <input type="text" />
          <label> 생년월일</label>
          <input type="text" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
