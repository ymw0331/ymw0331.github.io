import React from 'react'
import './Certificates.scss'
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

const Certificates = () => {
    return (
        <h2 className="head-text">Certifications & Awards</h2>
    )
}

export default AppWrap(
    MotionWrap(Certificates, 'app__certificates'),
    "certificates",
    "app__primarybg"
);
