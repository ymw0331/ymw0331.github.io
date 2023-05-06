import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import "./Experiences.scss";

const Experiences = () => {

    //states
    const [activeTabs, setActiveTabs] = useState([0]); // Set the first tab to be active by default
    const [workExperience, setWorkExperience] = useState([]);

    useEffect(() => {
        const workExperienceQuery = '*[_type == "workExperience"]';
        client.fetch(workExperienceQuery).then((data) => {
            // console.log(data);
            setWorkExperience(data);
        });
    }, []);



    const toggleTab = (tabIndex) => {
        if (activeTabs.includes(tabIndex)) {
            setActiveTabs(activeTabs.filter((index) => index !== tabIndex));
        } else {
            setActiveTabs([...activeTabs, tabIndex]);
        }
    };

    return (
        <>
            <h2 className='head-text'>Experiences</h2>

            <div className="app__experiences-container">
                <div className="row">
                    <div className="col">

                        <motion.div
                            className="tabs"
                        >
                            {workExperience?.map((workEx, index) => (
                                <div
                                    key={index}
                                    className={`tab ${activeTabs.includes(index) ? "active" : ""}`}
                                >
                                    <input
                                        className="app__experiences-tabs"
                                        type="checkbox"
                                        id={`chck${index}`}
                                        checked={activeTabs.includes(index)}
                                        onChange={() => toggleTab(index)}
                                    />
                                    <label className="tab-label" htmlFor={`chck${index}`}>
                                        {workEx.company}  |  {workEx.name}  | {workEx.year}
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
