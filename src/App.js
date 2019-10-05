import React, {useState, useEffect} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Question from './components/Question'

function App() {
  const [question, setQuestion] = useState(0)
  const [questions, setQuestions] = useState([])
  
  useEffect( () => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3000/questions',
      );
      setQuestions(result.data);
    };
    fetchData()
  }, [] )

  const startQuiz = () => {
    return (
      <div>
       <h4>How to play:</h4>
       <p>The game is not to guess the correct answer but to guess the answer that most people think! 
       We will compare your answers to the average from the population. 
       </p>
       <h4>Scoring:</h4>
       <ul>
          <li> Within 1% of the average: 10pts</li>
          <li> Within 10% of the average: 5pts</li>
          <li> Within 25% of the average: 1pts</li>
       </ul>
       <button class="start-button" onClick={() => setQuestion(1)}> Start the quiz!</button>
      </div>
    )
  }
  
  const displayQuestion = () => {
    
    const back = () => {
      setQuestion(question-1)
    }
  
    const forward = () => {
      setQuestion(question+1)
    }
    return (
      <div>
        <Question 
        back={back}
        forward={forward}
        question={questions[question-1]}
        />
      </div>
    )
  }

  const displayResults = () => {
    return (
      <div>
        <h4>Congratulations on completing the quiz! These are your results:</h4>
        <p>Placeholder for results</p>
        <button onClick={() => setQuestion(0)}>Retake the quiz?</button>
      </div>
    )
  }

  return (
    <div class="box-container" >
      <header>
        <h1>What most people think?</h1>
      </header>
      {question === 0 ? startQuiz() : 
      question > 0 && question < questions.length + 1 ? displayQuestion() : displayResults()}
    </div>
  );
}

export default App;
