import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF, FaGithub } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href="https://www.linkedin.com/in/ymw0331/" target="_blank" rel="noopener noreferrer">
        <div>
          <BsLinkedin />
        </div>
      </a>

      <a href="https://github.com/ymw0331" target="_blank" rel="noopener noreferrer">
        <div>
          <FaGithub />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
