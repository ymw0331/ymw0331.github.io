import React, { useRef, useEffect } from 'react';
import "./Header.scss";
import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import lottie from 'lottie-web'
import Typed from 'typed.js';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
};


const Header = () => {
  const element = useRef(null);
  const lottieContainer = useRef(null)

  useEffect(() => {

    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      load: true,
      autoplay: true,
      animationData: require('../../assets/banner-coder.json')
    })

  }, [])


  useEffect(() => {

    const typed = new Typed(element.current, {
      strings: [
        "Enthusiastic Dev 😎",
        "Full stack Developer 💻",
        "Mern stack Dev 📱",
        "AWS Cloud Practitioner ☁️",
        "React/React Native 🌐",
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
            <h3 className="title-text text-uppercase">Hey, I am MingWei👋</h3>
            <h4 className="text-uppercase">I am a {""}
              <span id="subheading"
                ref={element}
              >
              </span></h4>
            <hr />
            <p>💻 An information systems engineering 2021 graduate.</p>

            <p>🌏 I’m currently working on</p>

            <p>🤓 A passionate web developer exploring the edges of full stack <mark>JavaScript</mark>.</p>

            <p>😎 Proficient in building end-to-end JavaScript web applications.</p>

            <p>💯 Have a strong appetite to learn new technologies in a short span and implement
              independently.</p>

            <p>🛠 Committed to developing high standards secure web application, great UX, usability with good coding standards.</p>

            <p>
              <iframe
                src="https://ghbtns.com/github-btn.html?user=ymw0331&type=follow&count=true&size=large"
                frameborder="0"
                width="230"
                height="30"
                title="GitHub">

              </iframe>

              <iframe
                src="https://ghbtns.com/github-btn.html?user=ymw0331&repo=bootstrap&type=star&count=true&size=large"
                frameborder="0"
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
                    href="./assets/Alok_Raj.pdf" target="_blank">RESUME &nbsp;<i
                      className="fas fa-external-link-alt" aria-hidden="true"></i>

                  </a>
                </button>


                <button type="button" className="btn button secondary-button text-uppercase second-btn">
                  <a
                    href="tel:+60 182205562">Hire Me
                  </a>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* <div className='lottieContainer'
          style={{ height: "500px", width: "500px" }}
          ref={lottieContainer}></div> */}

        {/* 
        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.flutter, images.redux, images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
          ))}
        </motion.div> */}




      </div>
    </>
  );
};

export default AppWrap(Header, 'home');