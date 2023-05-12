import React, { useRef, useEffect } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { images } from '../../constants';
import "./Header.scss";
import { NavLink } from "react-router-dom";
import pdfFile from '../../assets/YongMingWei-Full_Stack_Developer_120523.pdf';


const Header = () => {
  const element = useRef(null);



  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [
        "Enthusiastic Dev 😎",
        "Full Stack Developer 💻",
        "Certified AWS Cloud Practitioner ☁️",
        "Certified AWS Developer Associate 👨🏻‍💻",
      ],
      startDelay: 0,
      typeSpeed: 80,
      backDelay: 100,
      backSpeed: 100,
      smartBackspace: true,
      loop: true,
      autoInsertCss: true,
      cursorChar: "|"
    });
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <>
      <div className='app__header app__flex'>

        <motion.div>
          <div className="app__header-intro">

            <h3 className="title-text text-uppercase">Hey, I am MingWei 👋</h3>
            <h4 className="i-am-title text-uppercase">I am a {""}
              <span id="subheading"
                ref={element}
              >
              </span>
            </h4>

            <hr />

            <p>
              🎓 Information Systems Engineering graduate with a merit degree.
            </p>

            <p>
              💼 Technical Delivery Intern experienced in mobile development, CICD/DevOps, and automation testing.
            </p>

            <p>
              💼 Former Product Engineer skilled in solution design, pre-sales support, and technical proposals.
            </p>


            <p>
              🛠️ Focused on full stack development with expertise in the
              {" "}
              <mark>
                <NavLink style={{ textDecoration: "none" }} to="/certificates">MERN</NavLink>
              </mark>

              {" "}stack. {" "}

              <mark>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.credly.com/badges/cb9d8197-7e50-4e66-878e-b6f0990f3575">
                  AWS Cloud Practitioner
                </a>
              </mark>
              {" "}
              and {" "} <mark>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.credly.com/badges/1c60537d-1c38-40b8-ae51-1f43739b80b6">
                  Developer Associate
                </a>
                {" "}
              </mark> certified.
            </p>

            <p>
              💻 Passionate about innovative web applications. Check out my
              <NavLink style={{ textDecoration: "none", color: "#4458dc" }} to="/projects"> portfolio  </NavLink>

              for MERN stack projects.
            </p>

            <p>
              ✨ Seeking opportunities as a full stack developer or cloud engineer to contribute to cutting-edge projects.
            </p>

            <p>
              <iframe
                frameBorder="0"
                src="https://ghbtns.com/github-btn.html?user=ymw0331&type=follow&count=true&size=large"
                width="230"
                height="30"
                title="GitHub">

              </iframe>

              <iframe
                frameBorder="0"
                src="https://ghbtns.com/github-btn.html?user=ymw0331&repo=ymw0331.github.io&type=star&count=true&size=large"
                width="170"
                height="30"
                title="GitHub">
              </iframe>
            </p>

            <hr />

            <div className="app__header-buttons">
              <div className="d-flex flex-row flex-wrap">
                <button type="button" className="btn button primary-button mr-4 text-uppercase first-btn">
                  <a
                    // href="https://drive.google.com/file/d/1oGemmZjwaGM83kYC7ahw3addJuOIz8xV/view?usp=sharing"
                    href={pdfFile} target="_blank" rel="noreferrer">
                    RESUME &nbsp;
                    <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                  </a>
                </button>

                <button type="button" className="btn button secondary-button text-uppercase second-btn">
                  <a href="tel:+60182205562">Hire Me</a>
                </button>
              </div>
            </div>


          </div>

        </motion.div>



        <div className="memojiContainer">
          <img src={images.memoji} alt="my-memoji" />
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Header, 'app__header'),
  "home",
  "app__primarybg");
