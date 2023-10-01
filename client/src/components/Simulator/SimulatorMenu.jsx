import React from "react";
import classes from "./SimulatorMenu.module.css";
import { Link } from "react-router-dom";

function SimulatorMenu() {
    return (
        <>
            <h1>בחנו את עצמכם</h1>
            <p>בצעו סימולציה למבחני הרישוי על-מנת לתרגל</p>
            <nav className={classes["simulator-menu"]}>
                <Link
                    className={classes["simulator-button"]}
                    to="/simulator/default"
                >
                    סימולציה למבחן הנדסאים
                </Link>
                <Link
                    className={classes["simulator-button"]}
                    to="/simulator/engineers"
                >
                    סימולציה למבחן מהנדסים
                </Link>
            </nav>
        </>
    );
}

export default SimulatorMenu;
