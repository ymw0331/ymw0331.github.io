import React, { useRef, useEffect } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { images } from '../../constants';
import "./Header.scss";


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
              🛠️ Focused on full stack development with expertise in the <mark>MERN</mark> stack. AWS Cloud Practitioner and Developer Associate certified.
            </p>

            <p>
              💻 Passionate about innovative web applications. Check out my portfolio for MERN stack projects.
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
                    href="./assets/ymw.pdf" target="_blank">RESUME &nbsp;<i
                      className="fas fa-external-link-alt" aria-hidden="true"></i>

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
