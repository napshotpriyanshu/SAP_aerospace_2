import React, { useState } from "react";
import  styles from "../assets/css/OtherLink.module.css"
import LinkCard from "./LinkCard";
import img from "../assets/images/main_1.png"
import { Card } from "./ProfileCard";

const OtherLink = () => {
    return (
        <div className={styles.cardsContainers }>
                <h1 className={styles.menu}>Explore More...</h1>
                <div className={styles.cards}>
                    <LinkCard address={img} title='Gallery' link="/gallery"/>
                    {/* <LinkCard address={img} title='Achivements' link="/achivements"/> */}
                    <LinkCard address={img} title='Teams' link="/teams"/>

                </div>
        </div>
    );
}

export default OtherLink;