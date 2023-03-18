/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'projects', 'skills', 'certificates', 'contact'].map((item, index) => (
      <a href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#4458dc' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;