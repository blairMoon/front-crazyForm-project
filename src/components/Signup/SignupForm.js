import React from 'react';
import css from './SignupForm.module.scss';
const SignupForm = ({ labelName, typeName, gender, width }) => {
  return (
    <div className={css.container}>
      <label className={css.label} for={gender}>
        {labelName}
      </label>
      <input className={css.useId} type={typeName} name={gender} />
    </div>
  );
};

export default SignupForm;
