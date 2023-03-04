import React from 'react';
import css from './SignupForm.module.scss';
import { useForm } from 'react-hook-form';
const SignupForm = ({ labelName, typeName, name }) => {
  const { register, watch } = useForm();
  return (
    <div className={css.container}>
      <label className={css.label} for={name}>
        {labelName}
      </label>
      <input className={css.useId} type={typeName} name={name} />
    </div>
  );
};

export default SignupForm;
