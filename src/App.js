import React, { useContext, Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Footer, Header, Skills, Projects, Certificates } from './container';
import { Navbar } from './components';
import { DarkModeContext } from "./contexts/DarkModeContext";
import './App.scss';



const App = () => {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <div className="app">

        <BrowserRouter forceRefresh>
          <Routes>
            <Route path="/" element={
              <Fragment>
                <Navbar />
                <Header />
                <About />
                <Skills />
                {/* <Projects />
                <Certificates /> */}
                <Footer />
              </Fragment>
            }>
            </Route>
            <Route path='/projects' element={
              <Fragment>
                <Navbar />
                <Projects />
                <Footer />
              </Fragment>
            } />
            <Route path='/certificates' element={
              <Fragment>
                <Navbar />
                <Certificates />
                <Footer />
              </Fragment>
            } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;