import styles from "../styles/Footer.module.css";
import { FaPython, FaReact } from "react-icons/fa";

export default function Footer() {
    return(
        <div className={styles["footer-container"]}>
            © Fernando Pareja Mayo — April 2023 — Github repositories below
            <div className={styles.container}>
                <a href="https://github.com/fparejam/frontend-react" target="_blank" rel="noreferrer">
                    <FaReact className = {styles.icon}/> 
                </a>    
                <a href="https://github.com/fparejam/backend-flask" target="_blank" rel="noreferrer">
                    <FaPython className = {styles.icon}/> 
                </a>    
            </div>
        </div>
    )
}