import React from "react";
import { FaPython, FaReact } from "react-icons/fa";
import styles from "../styles/Header.module.css";

const Header = () => {
    return (
        <div className={styles.container}>
                <a href="https://github.com/fparejam/frontend-react" target="_blank" rel="noreferrer">
                    <FaReact className = {styles.icon}/> 
                </a>    
                <a href="https://github.com/fparejam/backend-flask" target="_blank" rel="noreferrer">
                    <FaPython className = {styles.icon}/> 
                </a>    
        </div>
    );
};

export default Header;
