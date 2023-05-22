import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import "./Experiences.scss";

const Experiences = () => {

    //states
    const [activeExpTabs, setActiveExpTabs] = useState([0]); // Set the first tab to be active by default
    const [workExperience, setWorkExperience] = useState([]);

    useEffect(() => {
        const workExperienceQuery = '*[_type == "workExperience"]';
        client.fetch(workExperienceQuery).then((data) => {
            // console.log(data);
            setWorkExperience(data);
        });
    }, []);



    const toggleTab = (tabIndex) => {
        if (activeExpTabs.includes(tabIndex)) {
            setActiveExpTabs(activeExpTabs.filter((index) => index !== tabIndex));
        } else {
            setActiveExpTabs([...activeExpTabs, tabIndex]);
        }
    };

    return (
        <>
            <h2 className='head-text'>Experiences</h2>

            <div className="app__experiences-container">
                <div className="row">
                    <div className="col">

                        <motion.div
                            whileInView={{ scale: [0, 1] }}
                            transition={{ duration: 0.25 }}
                            className="tabs"
                        >
                            {workExperience?.map((workEx, index) => (
                                <div
                                    key={index}
                                    className={`tab ${activeExpTabs.includes(index) ? "active" : ""}`}
                                >
                                    <input
                                        className="app__experiences-tabs"
                                        type="checkbox"
                                        id={`chck${index}`}
                                        checked={activeExpTabs.includes(index)}
                                        onChange={() => toggleTab(index)}
                                    />
                                    <label className="tab-label" htmlFor={`chck${index}`}>
                                        {" "}

                                        <a href={`${workEx.companyLink}`}
                                            style={{ textDecoration: "none" }}>
                                            🏢  {workEx.company}
                                        </a>

                                        {" "}
                                        💼  {workEx.name}

                                        {" "}

                                        📅  {workEx.year}
                                        {" "}

                                    </label>
                                    <div className="tab-content">
                                        {workEx.desc.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Experiences, 'app__experiences'),
    "experiences",
    "app__primarybg"
);
