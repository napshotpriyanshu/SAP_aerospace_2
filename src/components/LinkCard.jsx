import React, { useState } from "react";
import  styles from "../assets/css/card.module.css"
import { Link } from "react-router-dom";

const LinkCard = (props) => {
    const { title, address, link } = props;
    return (
        <div className={styles.card}>
                <img src={address} alt='dinner' className={styles.img} />
                {/* <p className={styles.foodName}>{title}</p> */}
                {/* <p className={styles.foodDesc}>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                <Link to={link}>
                <button className={styles.btn} >{title}</button>
                </Link>
            </div>
    );
    
}

export default LinkCard;