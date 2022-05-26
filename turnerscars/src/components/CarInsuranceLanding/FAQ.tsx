import React from "react";
import './FAQ.css'
import FAQquestionsAndAnswers from "./FAQquestionsAndAnswers";

function FAQ() {
    return (
        <div className="FAQ__container">
            <div className="FAQ">
                <span className="FAQ__title">Frequently Asked Questions</span>
                <div className="FAQ__table">
                    <FAQquestionsAndAnswers
                        question={'What does lorem ipsum actually mean?'}
                        answer={'apprently pain itself, sounds kinda edgy'} />
                    <div className="FAQ__table-line" />
                    <FAQquestionsAndAnswers
                        question={'How do we know what kind of sounds dinosaurs made?'}
                        answer={'fossilized echos of soundwaves /s'} />
                    <div className="FAQ__table-line" />
                    <FAQquestionsAndAnswers
                        question={'Why work from home is not as fun as we thought it would be?'}
                        answer={'Im loving it personally, cant speak for others though'} />
                    <div className="FAQ__table-line" />
                    <FAQquestionsAndAnswers
                        question={'In what way did human  beings started using words?'}
                        answer={'This is beyond my pay grade'} />
                    <div className="FAQ__table-line" />
                    <FAQquestionsAndAnswers
                        question={'Which is the least developed area in the world'}
                        answer={'According to the Human Development Index, Niger is the least developed country in the world with an HDI of . 354. Niger is afflicted with widespread malnutrition and 44.1% of its people live below the poverty line.'} />

                </div>
                <div className="FAQ__button-container">
                <div className="FAQ__blue-button"><span className="FAQ__button-text">FAQ Comprehensive</span></div>
                <div className="FAQ__blue-button"><span className="FAQ__button-text">FAQ 3rd party, fire, theft</span></div>
                <div className="FAQ__blue-button"><span className="FAQ__button-text">FAQ MIB</span></div>
                </div>
            </div>
        </div>
    )
}

export default FAQ