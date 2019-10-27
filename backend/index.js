const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

const questions = [{
  id: 1,
  question: 'How many people have climbed to the summit of Everest?',
  answers: [],
  currentAnswer: '676',
  average: 922.741935483871,
  correctAnswer: 4000,
  src: 'https://cdn.pixabay.com/photo/2017/03/15/13/27/rough-horn-2146181_960_720.jpg',
  currentScore: 1,
}, {
  id: 2,
  question: 'How many people have climbed to the summit of Everest?',
  answers: [],
  currentAnswer: '676',
  average: 922.741935483871,
  correctAnswer: 4000,
  src: 'https://cdn.pixabay.com/photo/2017/03/15/13/27/rough-horn-2146181_960_720.jpg',
  currentScore: 1,
}];

app.get('/questions', (req, res) => {
  res.json(questions);
});

app.get('/questions/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const question = questions.find(question => question.id === id);
  if (question) {
    response.json(question)
  } else {
    response.status(404).end()
  }
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})