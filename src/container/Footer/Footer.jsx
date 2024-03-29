import React, { useState, } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { client } from '../../client';
import "./Footer.scss";
import emailjs from '@emailjs/browser';



const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' }); const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData; // destructuring

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = () => {
    setLoading(true);

    // Send to Sanity CMS
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      });


    // Send email via EmailJS
    const templateParams = {
      from_name: name + " " + email,
      to_name: "ymw0331@gmail.com",
      feedback: message
    };

    const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const EMAILJS_PUBLIC_API_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_API_KEY)
      .then(function (response) {
        console.log('SUCCESS EMAIL SENT!', response.status, response.text);
        setLoading(false);
        setIsFormSubmitted(true);
      }, function (error) {
        console.log('FAILED...', error);
      });

  };

  return (
    <>
      <h2 className='head-text'>Take a coffee and chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href='mailto:ymw0331@gmail.com' className='p-text'>ymw0331@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href='tel: +60182205562' className='p-text'>+60182205562</a>
        </div>

        {!isFormSubmitted ? <div className='app__footer-form app__flex'>

          <div className='app__flex'>
            <input className='p-text' name='name' type="text" placeholder='Your Name' value={name} onChange={handleChangeInput} />
          </div>

          <div className='app__flex'>
            <input className='p-text' name='email' type="email" placeholder='Your Email' value={email} onChange={handleChangeInput} />
          </div>


          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name="message"
              onChange={handleChangeInput}
            >
            </textarea>
          </div>
          <button
            type='button'
            className='p-text'
            onClick={handleSubmit} >{loading ? 'Sending' : 'Send Message'}
          </button>

        </div>
          :
          <div>
            <h3 className='head-text'>Thank you for getting in touch</h3>
          </div>
        }
      </div>
    </>
  );
};


export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  "contact",
  "app__whitebg"
);