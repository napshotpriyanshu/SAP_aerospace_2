import React, { useEffect, useState } from 'react';
import "../assets/css/achivement.css"
import { styles } from "../styles";

import img1 from '../assets/images/achievment_1.png'
import img2 from '../assets/images/achievment_2.jpeg'
import img3 from '../assets/images/achievment_3.png'
import img4 from '../assets/images/North_tech_symposium/1.jpg'
import img5 from '../assets/images/North_tech_symposium/2.jpg'
import img6 from '../assets/images/North_tech_symposium/3.jpg'
import img7 from '../assets/images/North_tech_symposium/4.jpg'
import img8 from '../assets/images/North_tech_symposium/5.jpg'
import img9 from '../assets/images/North_tech_symposium/6.jpg'
import img10 from '../assets/images/North_tech_symposium/7.jpg'
import img11 from '../assets/images/North_tech_symposium/8.jpg'
import img12 from '../assets/images/North_tech_symposium/9.jpg'
// import img13 from '../assets/images/North_tech_symposium/10.png'


function Achivements() {

    const imgs = [
        { id: 0, value: img1 },
        { id: 1, value: img2 },
        { id: 2, value: img3 },
        // { id: 3, value: img4 },
        { id: 4, value: img5 },
        { id: 5, value: img6 },
        { id: 6, value: img7 },
        // { id: 7, value: img8 },
        // { id: 8, value: img9 },
        { id: 9, value: img10 },
        { id: 10, value: img11 },
        { id: 11, value: img12 },

    ]
    const [wordData, setWordData] = useState(imgs[0])
    const [val, setVal] = useState(0)
    const handleClick = (index) => {
        console.log(index)
        setVal(index)
        const wordSlider = imgs[index];
        setWordData(wordSlider)
    }
    const handleNext = () => {
        let index = val < imgs.length - 1 ? val + 1 : val;
        setVal(index)
        const wordSlider = imgs[index];
        setWordData(wordSlider)
    }
    const handlePrevious = () => {
        let index = val <= imgs.length - 1 && val > 0 ? val - 1 : val;
        setVal(index)
        const wordSlider = imgs[index];
        setWordData(wordSlider)
    }


    return (

        <div className="main1">
             <h2 className={`${styles.sectionHeadText} text-center`}>
                Achievement
            </h2>
            
            <img src={wordData.value} height="300" width="500" />

            
            <div className='flex_row'>
                {imgs.map((data, i) =>
                    <div className="thumbnail" key={i} >
                        <img className={wordData.id == i ? "clicked" : ""} src={data.value} onClick={() => handleClick(i)} height="70" width="100" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Achivements;