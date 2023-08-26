"use client"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./DarkModeToggle.module.css";

const DarkModeToggle = () => {
    const { toggle, mode } = useContext(ThemeContext);

    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div
                className={styles.ball}
                style={
                    mode === "light" ? { left: ".2rem" } : { right: ".2rem" }
                }
            />
        </div>
    );
};

export default DarkModeToggle;
