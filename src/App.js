import React, { useContext, Fragment } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { About, Footer, Header, Skills, Projects, Certificates, Experiences, Educations } from './container';
import { Navbar } from './components';
import { DarkModeContext } from "./contexts/DarkModeContext";
import './App.scss';


const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-message">The requested page does not exist.</p>
      <Link to="/" className="not-found-link">Go to Homepage</Link>
    </div>
  );
};

const App = () => {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <div className="app">

        <BrowserRouter forceRefresh={true} basename="/">
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;