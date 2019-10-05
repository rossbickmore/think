import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const Answer = ({question, forward}) => {
    return (        
        <div>
            <h3>Your answer {question.currentAnswer}</h3>
            <h2>Average {Math.round(question.average)}</h2>
            <h2>Correct answer {Math.round(question.correctAnswer)}</h2>
            <button onClick={forward} >Next question</button>
        </div>
    )
}


export default Answer;