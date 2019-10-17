/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Question from './components/Question';
import Answer from './components/Answer';
import {
  score,
  average,
} from './Utils/helperFunctions';

function App() {
  const [question, setQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState(0);
  const [displayAnswer, setDisplayAnswers] = useState(false);

  const url = 'http://localhost:3001/questions/';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        url,
      );
      setQuestions(result.data);
    };
    fetchData();
  }, []);

  const startPage = () => (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="card">
      <div className="row">
        <h2>How to play:</h2>
        <p>
          The game is not to guess the correct answer but to guess the answer that most people think!
          We will compare your answers to the average from the population.
        </p>
      </div>
      <div className="row">
        <h2>Scoring:</h2>
        <ul>
          <li> Within 10% of the average: 10pts</li>
          <li> Within 25% of the average: 5pts</li>
          <li> Within 50% of the average: 1pts</li>
        </ul>
      </div>
      <div className="row">
        <button className="start-button" type="submit" onClick={() => setQuestion(1)}> Start the quiz!</button>
      </div>
    </div>
  );

  const quizPage = () => {
    const forward = () => {
      setQuestion(question + 1);
      setDisplayAnswers(false);
    };
    const submit = async () => {
      const { id } = questions[question - 1];
      const object = questions.find((x) => x.id === id);
      const newObject = {
        ...object,
        answers: object.answers.concat(answer),
        average: average(object.answers),
        currentAnswer: answer,
        currentScore: score(answer, average(object.answers)),
      };
      await axios.put(url + id, newObject);
      setQuestions(questions.map((x) => (x.id === id ? newObject : x)));
      setDisplayAnswers(true);
      setAnswer(0);
    };
    const handleAnswerChange = (event) => {
      event.preventDefault();
      setAnswer(event.target.value);
    };
    const displayQuestion = () => (
      <div>
        <Question
          forward={forward}
          question={questions[question - 1]}
          handleAnswerChange={handleAnswerChange}
          submit={submit}
          answer={answer}
        />
      </div>
    );
    const displayResult = () => (
      <div>
        <Answer
          forward={forward}
          question={questions[question - 1]}
        />
      </div>
    );
    return (
      <div>
        {displayAnswer === false ? displayQuestion() : displayResult()}
      </div>
    );
  };
  const endPage = () => {
    const countScore = (arr) => arr.reduce((a, b) => a + b.currentScore, 0);
    return (
      <div className="card">
        <h3>
          You scored
          {' '}
          {countScore(questions)}
          {' '}
          points!
        </h3>
        <h3>Thanks for playing</h3>
        <button className="start-button" type="submit" onClick={() => setQuestion(0)}>Play again</button>
      </div>
    );
  };
  return (
    <div className="box-container">
      <header>
        <h1>What most people think?</h1>
      </header>
      {question === 0 ? startPage()
        : question > 0 && question < questions.length + 1 ? quizPage() : endPage()}
    </div>
  );
}

export default App;
