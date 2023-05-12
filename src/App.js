import React, { useContext, Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useHistory } from 'react-router-dom';
import { About, Footer, Header, Skills, Projects, Certificates, Experiences, Educations } from './container';
import { Navbar } from './components';
import { DarkModeContext } from "./contexts/DarkModeContext";
import './App.scss';



const App = () => {

  const { darkMode } = useContext(DarkModeContext);
  const location = useLocation();
  const history = useHistory();

  // In case of error 404
  useEffect(() => {
    if (!location.pathname.startsWith('/assets')) {
      history.replace('/');
    }
  }, [location, history]);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <div className="app">

        <BrowserRouter forceRefresh={true} basename="/ymw0331.github.io">
          <Routes>
            <Route path="/" element={
              <Fragment>
                <Navbar />
                <Header />
                <About />
                <Experiences />
                <Educations />
                <Skills />
                {/* <Testimonial /> */}
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