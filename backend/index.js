const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('build'));

const questions = [
  {
    id: 1,
    question: 'How many people have climbed to the summit of Everest?',
    answers: [
      2,
      3,
      '200',
      '2000',
      '2000',
      '2000',
      0,
      '1000',
      '1000',
      0,
      0,
      0,
      '50',
      '2000',
      '2000',
      '200',
      0,
      '400',
      '500',
      '4000',
      '2000',
      '1500',
      '900',
      '800',
      0,
      '900',
      '1000',
      '300',
      '1000',
      '850',
      '2000',
      '676',
    ],
    currentAnswer: '676',
    average: 922.741935483871,
    correctAnswer: 4000,
    src: 'https://cdn.pixabay.com/photo/2017/03/15/13/27/rough-horn-2146181_960_720.jpg',
    currentScore: 1,
  },
  {
    id: 2,
    question: 'How many billionaires are there in the world (as of 2019)?',
    answers: [
      2,
      3,
      0,
      '666',
      '2000',
      '3000',
      '5000',
      '5000',
      '1500',
      '4000',
      '2000',
      0,
      '2000',
      '3000',
      '133',
      '4000',
      '3000',
    ],
    currentAnswer: '3000',
    average: 2019,
    correctAnswer: 2153,
    src: 'https://cdn.pixabay.com/photo/2017/03/27/21/31/money-2180330_960_720.jpg',
    currentScore: 1,
  },
  {
    id: 3,
    question: 'How many years does it take a space-shuttle to get to Mars?',
    answers: [
      2,
      3,
      '100',
      '150',
      '30',
      0,
      '100',
      '100',
      '800',
    ],
    currentAnswer: '800',
    average: 60.625,
    correctAnswer: 150,
    src: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
    currentScore: 0,
  },
  {
    id: 4,
    question: 'What is the hottest temperature (degrees celsius) ever recorded on earth?',
    answers: [
      2,
      3,
      '60',
      '60',
      '50',
      0,
      '60',
      '50',
      '114',
    ],
    currentAnswer: '114',
    average: 35.625,
    correctAnswer: 57,
    src: 'https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_960_720.jpg',
    currentScore: 0,
  },
  {
    id: 5,
    question: 'How many days can you go without water?',
    answers: [
      2,
      3,
      '4',
      '4',
      0,
      '10',
      '6',
      '2',
    ],
    currentAnswer: '2',
    average: 4.142857142857143,
    correctAnswer: 4,
    src: 'https://cdn.pixabay.com/photo/2015/09/12/21/09/man-937384_960_720.jpg',
    currentScore: 0,
  },
  {
    id: 6,
    question: 'How many calories in a banana?',
    answers: [
      2,
      3,
      '200',
      0,
      '200',
      '100',
      '100',
    ],
    currentAnswer: '100',
    average: 84.16666666666667,
    correctAnswer: 89,
    src: 'https://cdn.pixabay.com/photo/2015/03/30/12/43/bananas-698608_960_720.jpg',
    currentScore: 5,
  },
  {
    id: 7,
    question: 'How long do cats live for?',
    answers: [
      2,
      3,
      '7',
      0,
      '15',
      '15',
      '20',
    ],
    currentAnswer: '20',
    average: 7,
    correctAnswer: 89,
    src: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg',
    currentScore: 0,
  },
  {
    id: 8,
    question: 'How many times does ireland fit into australia?',
    answers: [
      2,
      3,
      '110',
      0,
      '100',
      '100',
      '600',
    ],
    currentAnswer: '600',
    average: 52.5,
    correctAnswer: 110,
    src: 'https://cdn.pixabay.com/photo/2012/10/25/23/05/australia-62823_960_720.jpg',
    currentScore: 0,
  },
  {
    id: 9,
    question: 'How many countries in the world?',
    answers: [
      2,
      3,
      '200',
      0,
      '200',
      '150',
      '168',
    ],
    currentAnswer: '168',
    correctAnswer: 195,
    average: 92.5,
    src: 'https://cdn.pixabay.com/photo/2011/12/13/17/07/earth-11048_960_720.jpg',
    currentScore: 0,
  },
  {
    id: 10,
    question: 'how many people have walked on the moon?',
    answers: [
      2,
      3,
      '70',
      0,
      '10',
      '10',
      '16',
    ],
    currentAnswer: '16',
    average: 15.833333333333334,
    correctAnswer: 13,
    src: 'https://cdn.pixabay.com/photo/2016/07/19/04/40/moon-1527501_960_720.jpg',
    currentScore: 10,
  },
];

app.get('/api/questions', (req, res) => {
  res.json(questions);
});

app.get('/api/questions/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const question = questions.find((question) => question.id === id);
  if (question) {
    response.json(question);
  } else {
    response.status(404).end();
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
