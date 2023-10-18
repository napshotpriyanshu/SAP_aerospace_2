import React, { useState } from "react";

import Home2 from '../components/Home2'
import About from '../components/about'
import OtherLink from '../components/OtherLink';
import Experience from "../components/Experience";



const HomePage = () => {
    return (

<div className='relative z-0 bg-primary'>
        <Home2 />
        <About />
        <Experience />
        <OtherLink />


        </div>

    );
}

export default HomePage;