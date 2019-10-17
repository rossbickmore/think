import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import '../App.css';

const Question = ({question , handleAnswerChange, submit, answer}) => {
    return (
        <div className="card">
            <div className="row">
                <h2>Question {question.id}</h2>
                <h3>{question.question}</h3>
            </div>
            <div className="row">
                <input type="number" min="0"
                     value={answer} onChange={handleAnswerChange}/>
                <button className="answer-button" onClick={submit}>
                <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
            <img itemprop="contentURL" src={question.src} alt={question.src}></img>
        </div>
    );
};

export default Question;