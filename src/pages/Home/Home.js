import React from 'react';

import css from './Home.module.scss';
import Header from '../../components/Header/Header';

function Home() {
  return (
    <>
      <Header />
      <div className={css.container}>myhome</div>
    </>
  );
}

export default Home;
