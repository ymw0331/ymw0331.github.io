import React, { useState, useEffect } from 'react';
import "./Certificates.scss"
import { AiOutlineLink } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Certificates = () => {
    const [certs, setCerts] = useState([]);
    const [filterCert, setFilterCert] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    useEffect(() => {
        const query = '*[_type == "certificates"]';

        client.fetch(query).then((data) => {
            // console.log("Numbers of Certs ", certs.length)
            setCerts(data);
            setFilterCert(data);
        });
    }, [certs.length]);

    const handleCertFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === 'All') {
                setFilterCert(certs);
            } else {
                setFilterCert(certs.filter((cert) => cert.tags.includes(item)));
            }
        }, 500);
    };

    return (
        <>
            <h2 className="head-text"><span>Certificates</span> & Awards</h2>

            <div className="app__cert-filter">
                {['AWS', 'TMForum', 'Udemy', 'Sololearn', 'All'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleCertFilter(item)}
                        className={`app__cert-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__cert-portfolio"
            >
                {filterCert.map((cert, index) => (
                    <div className="app__cert-item app__flex" key={index}>
                        <div
                            className="app__cert-img app__flex"
                        >
                            <img src={urlFor(cert.imgUrl)} alt={cert.name} />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__cert-hover app__flex"
                            >
                                <a href={cert.certificateLink} target="_blank" rel="noreferrer">

                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiOutlineLink />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__cert-content app__flex">
                            <h4 className="bold-text">{cert.title}</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>{cert.description}</p>

                            <div className="app__cert-tag app__flex">
                                <p className="p-text">{cert.tags[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>)
}

export default AppWrap(
    MotionWrap(Certificates, 'app__certs'),
    "certificates",
    "app__primarybg"
);
