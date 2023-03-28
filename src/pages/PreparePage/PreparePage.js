import React from 'react';
import css from './PrepagePage.module.scss';
const PreparePage = () => {
  return (
    <div>
      <div className={css.imgDiv}>
        <img
          className={css.img}
          src="/images/logo.png"
          alt="logo"
          width="200"
        />
      </div>
    </div>
  );
};

export default PreparePage;
