import React, { useState } from "react";
import "../assets/css/about.css"
import {
    Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import img1 from "../assets/images/engine.jpg";
import data from "../utils/accordion";


const About = () => {
    return (
        <>
            <section className="v-wrapper bg-black" id="main">
                <div className="mt-10">
                    <span className="text-4xl orangeText"> OUR MISSION </span>
                </div>
                <div className="paddings innerWidth flexCenter v-container">
                    {/* left */}
                    <div className="v-left">
                        <div className="image-container">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    {/* right */}


                    <div className="flexColStart v-right">
                        <span className="primaryText"> Develop a micro gas turbine engine technology for
                            powering UCAVs
                        </span>
                        {/* <span className="secondaryText"> Develop a micro gas turbine engine technology for
                            powering UCAVs
                        </span> */}

                        <Accordion
                            className="accordion"
                            allowMultipleExpanded={false}
                            preExpanded={[0]}
                        >
                            {data.map((item, i) => {

                                const [className, setClassName] = useState(null);

                                return (
                                    <AccordionItem className={'accordionItem ${className}'} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="flexCenter accordionButton">

                                                <AccordionItemState>
                                                    {({ expanded }) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                                </AccordionItemState>

                                                {/* <div className="flexCenter icon">{item.icon}</div> */}
                                                <span className="primaryText">
                                                    {item.heading}
                                                </span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>


                                    </AccordionItem>
                                );
                            })}

                        </Accordion>

                    </div>
                </div>
            </section>
        </>
    );
};

export default About;