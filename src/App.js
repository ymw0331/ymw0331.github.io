import React, { useContext } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Footer, Header, Skills, Projects, Certificates } from './container';
import { Navbar } from './components';
import { DarkModeContext } from "./contexts/DarkModeContext";
import './App.scss';



const App = () => {

  const { darkMode } = useContext(DarkModeContext);
  // console.log("Dark Mode:", darkMode)

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      {/* <div className={'theme-dark'}> */}
      <div className="app">
        {/* <BrowserRouter> */}
        {/* <Routes>

          <Route path='/categories' element={<Certificates />} />

        </Routes> */}

        <Navbar />
        <Header />
        <About />
        <Projects />
        <Skills />
        {/* <Testimonial /> */}
        <Certificates />
        <Footer />


        {/* </BrowserRouter> */}
      </div>

    </div>
  );
};

export default App;