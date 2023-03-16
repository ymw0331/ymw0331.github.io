import React, { useState, useContext } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { DarkModeContext } from "../../contexts/DarkModeContext";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import './Navbar.scss';



const Navbar = () => {

  const [toggleNavLink, setToggleNavLink] = useState(false);
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (

    <nav className="app__navbar">

      <div className="app__navbar-logo">

        <a href="#home">
          <img
            src={images.ymwLinkedInCircle}
            alt="logo"
          />
        </a>
        <a href="#home">
          <h4 >Wayne Yong</h4>
        </a>

      </div>


      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'certificates', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
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
              {['home', 'about', 'work', 'skills', 'certificates', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggleNavLink(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}


      </div>
    </nav>

  );
};

export default Navbar;