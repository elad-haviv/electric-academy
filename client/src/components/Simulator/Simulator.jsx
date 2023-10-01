import React, { useReducer, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
import QuestionPicker from "./QuestionPicker";
import styles from "./Simulator.module.css";

const questionsReducer = (state, action) => {
    switch (action.type) {
        case "answer":
            return state.map((question) =>
                question.id === action.questionId
                    ? {
                          ...question,
                          selected: action.answer,
                      }
                    : question
            );
    }
};

function Simulator() {
    const { count, isForEngineers, isOrdered, questions } = useLoaderData();
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [isShowingAnswer, setIsShowingAnswer] = useState(false);
    const [questionsState, dispatch] = useReducer(questionsReducer, questions);

    return <div>Simulator</div>;
}

export default Simulator;
