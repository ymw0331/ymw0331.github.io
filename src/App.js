import React, { useContext } from 'react';
import { About, Footer, Header, Skills, Certificates, Work } from './container';
import { Navbar } from './components';
import { DarkModeContext } from "./contexts/DarkModeContext";
import './App.scss';

const App = () => {

  const { darkMode } = useContext(DarkModeContext);
  // console.log("Dark Mode:", darkMode)

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
    {/* <div className={'theme-dark'}> */}
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Certificates />
      <Footer />
    </div>
  );
};

export default App;