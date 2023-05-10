import React from 'react';
import { SocialMedia } from '../components';


const AppWrap = (Component, idName, classNames) => function HOC() {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <div id={idName} className={`app__container ${classNames} `}>
      <SocialMedia />

      <div className='app__wrapper app__flex'>
        <Component />

        <div className='copyright'>
          <p className='p-text'>©{year} Wayne Yong</p>
          <p className='p-text'>All rights reserved</p>
        </div>
      </div>

      {/* <NavigationDots active={idName} /> */}
    </div>
  );
};

export default AppWrap;
