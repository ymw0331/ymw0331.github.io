import React, { useState, useContext } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { DarkModeContext } from "../../contexts/DarkModeContext";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';



const Navbar = () => {

  const [toggleNavLink, setToggleNavLink] = useState(false);
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (

    <nav className="app__navbar">

      <div className="app__navbar-logo">

        <NavLink aria-current="page" to="/">
          <img
            src={images.ymwLinkedInCircle}
            alt="logo"
          />
        </NavLink>

        <NavLink aria-current="page" to="/">
          <h4 >Wayne Yong</h4>
        </NavLink>

      </div>


      <ul className="app__navbar-links ">
        {/* {['about', 'projects', 'skills', 'certificates', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))} */}


        <li className="app__flex p-text " >
          <NavLink aria-current="page" to="/">
            Home
          </NavLink>
        </li>

        <li className="app__flex p-text " >
          <NavLink aria-current="page" to="/projects">
            Projects
          </NavLink>

        </li>

        <li className="app__flex p-text " >

          <NavLink aria-current="page" to="/certificates">
            Certificates
          </NavLink>
        </li>

      </ul>

      <div className="app__navbar-theme">
        {/* <DarkModeOutlinedIcon /> */}
        {
          darkMode ? <WbSunnyOutlinedIcon onClick={toggle} /> : <DarkModeOutlinedIcon onClick={toggle} />
        }
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggleNavLink(true)} />

        {toggleNavLink && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggleNavLink(false)} />

            <ul>
              {/* {['home', 'about', 'projects', 'skills', 'certificates', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggleNavLink(false)}>
                    {item}
                  </a>
                </li>
              ))} */}

              <li>
                <NavLink aria-current="page" to="/" onClick={() => setToggleNavLink(false)}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink aria-current="page" to="/projects" onClick={() => setToggleNavLink(false)}>
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink aria-current="page" to="/certificates" onClick={() => setToggleNavLink(false)}>
                  Certificates
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </div>


    </nav>

  );
};

export default Navbar;