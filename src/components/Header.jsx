import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
    return (
        <div className={styles.container}>
            <h1>
                DASHBOARD
            </h1>
            <span>BCG Fullstack SWE Interview </span>
        </div>
    );
};

export default Header;
