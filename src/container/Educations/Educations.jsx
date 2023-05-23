import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import "./Educations.scss";

const Educations = () => {

    //states
    // const [activeEduTabs, setActiveEduTabs] = useState([0]); // Set the first tab to be active by default

    const [activeEduTabs, setActiveEduTabs] = useState([0]); // Set the first tab to be active by default
    const [educations, setEducations] = useState([]);

    useEffect(() => {
        const educationsQuery = '*[_type == "educations"]';
        client.fetch(educationsQuery).then((data) => {
            // console.log(data);
            setEducations(data);
        });
    }, []);



    // const toggleTab = (tabIndex) => {
    //     if (activeEduTabs.includes(tabIndex)) {
    //         setActiveEduTabs(activeEduTabs.filter((index) => index !== tabIndex));
    //     } else {
    //         setActiveEduTabs([...activeEduTabs, tabIndex]);
    //     }
    // };

    const toggleTab = (tabIndex) => {
        if (activeEduTabs.includes(tabIndex) && activeEduTabs.length > 1) {
            setActiveEduTabs(activeEduTabs.filter((index) => index !== tabIndex));
        } else {
            setActiveEduTabs([tabIndex]);
        }
    };

    return (
        <>
            <h2 className='head-text'>Educations</h2>

            <div className="app__educations-container">
                <div className="row">
                    <div className="col">

                        <motion.div
                            whileInView={{ scale: [0, 1] }}
                            transition={{ duration: 0.25 }}
                            className="tabs"
                        >
                            {educations?.map((edu, index) => (
                                <div
                                    key={index}
                                    className={`tab ${activeEduTabs.includes(index) ? "active" : ""}`}
                                >
                                    <input
                                        className="app__educations-tabs"
                                        type="checkbox"
                                        id={`chck${index}`}
                                        checked={activeEduTabs.includes(index)}
                                        onChange={() => toggleTab(index)}
                                    />
                                    <label className="tab-label" htmlFor={`chck${index}`}>

                                        <a
                                            style={{ textDecoration: "none" }}
                                            target="_blank"
                                            href={`${edu.universityLink}`}
                                            rel="noreferrer"
                                        >
                                            🏫 {edu.university}
                                        </a>


                                        📅  {edu.year}
                                    </label>
                                    <div className="tab-content">
                                        {edu.desc.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div >
            </div >
        </>
    );
};

export default AppWrap(
    MotionWrap(Educations, 'app__educations'),
    "educations",
    "app__whitebg"
);
