import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

const Question = ({back, forward, question}) => {
    return (
        <div>
                <h2>Question {question.number}</h2>
                <h4>{question.question}</h4>
                <div class="input-field">
                    <input placeholder="..." for="answer" type="text" class="validate" />
                    <button class="answer-button">submit</button>
                </div>
                <div class="button-box">
                    <button 
                    class="back-button" onClick={back}>
                    <FontAwesomeIcon icon={faBackward} /> Back
                    </button>
                    <button class="skip-button" onClick={forward}>
                    Forward <FontAwesomeIcon icon={faForward} /> 
                    </button>
                </div>
        </div>
    );
};

export default Question;