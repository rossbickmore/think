import React from 'react';


const Answer = ({question, forward}) => {
    return (        
        <div class="card">
            <h3>You think the answer is {question.currentAnswer}</h3>
            <h3>Most people think the answer is: {Math.round(question.average)}</h3>
            <h3>The correct answer is {Math.round(question.correctAnswer)}</h3>
            <button onClick={forward} className="skip-button">Next question</button>
        </div>
    )
}



export default Answer;