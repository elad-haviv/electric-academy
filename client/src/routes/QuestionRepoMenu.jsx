import React, { useEffect, useMemo, useState } from "react";
import SubjectsLoader from "../loaders/SubjectsLoader";
import classes from "./QuestionRepoMenu.module.css";
import { Link } from "react-router-dom";

const createButton = (key, text, route) => (
    <Link to={route} className={classes["question-repo-item"]} key={key}>
        {text}
    </Link>
);

function QuestionRepoMenu() {
    let buttons = [];

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        SubjectsLoader()
            .then((data) => setSubjects(data))
            .catch((error) => {
                console.log("Error loading subjects:", error);
                return setSubjects(["Meow"]);
            });
    }, []);

    const buttonList = useMemo(
        () => [
            createButton("all", "כל השאלות", "/questions/all"),
            createButton(
                "non-engineers",
                "שאלות להנדסאים",
                "/questions/non-engineers"
            ),
            createButton("engineers", "שאלות למהנדסים", "/questions/engineers"),
            createButton("random", "שאלה אקראית", "/questions/random"),
            ...subjects.map((subject) =>
                createButton(
                    subject,
                    `נושא: ${subject}`,
                    `/questions/subject/${subject}`
                )
            ),
        ],
        [subjects]
    );

    return (
        <>
            <h1>מאגר השאלות</h1>
            <p>עיינו בשאלות ובפתרונות למבחני הרישוי הארציים.</p>
            <p>
                השאלות באפליקציה לקוחות מתוך מאגר השאלות של משרד העבודה בגרסה
                7.1 שפורסמה בספטמבר 2023
            </p>
            <nav className={classes["question-repo-menu"]}>{buttonList}</nav>
        </>
    );
}

export default QuestionRepoMenu;
