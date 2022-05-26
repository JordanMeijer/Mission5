import React from "react";
import './FAQquestionsAndAnswers.css'
import { useState } from "react";

function FAQquestionsAndAnswers(props: any) {
    const [isMenuShown, setMenuShown] = useState(false)
    const ToggleMenu = () => {
        if (isMenuShown) {
            setMenuShown(false);
        } else setMenuShown(true)
    }

    return (
        <>
            <div className="FAQ__question" onClick={ToggleMenu}>
                <span className="FAQ__question-text">{props.question}</span>
                <img src="FAQ_arrow.png" alt="img" className="FAQ__table-arrow" />
            </div>
            <div className={isMenuShown ? 'FAQ__answer FAQ__answer-shown' : 'FAQ__answer'}>
                <span className="FAQ__answer-text">{props.answer}</span>
            </div>
        </>
    )
}

export default FAQquestionsAndAnswers