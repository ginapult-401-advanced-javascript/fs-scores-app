'use strict';

const express = require('express');
const scoreRouter = express.Router();
const uuid = require('uuid/v4');

let scores = [
  {_id: '10', name: 'Baby Khaleesi', score: 10000000,},
  {_id: '10', name: 'Ginger', score: 100,},
  {_id: '10', name: 'Khal Basil', score: 100,},
  {_id: '10', name: 'Rosie', score: 99,},
  {_id: '10', name: 'Demi Dog', score: 50,}
];


// CREATE
scoreRouter.post('/scores', (request, response) => {
  const id = uuid();
  scores.push(
    {_id: id, name: request.body.name, score: request.body.score,}
  );
  response.status(200).json({id});
});


// READ ALL (sorted highest to lowest score)

// scoreRouter.get('/scores', (request, response) => {
//   response.status(200).json(scores);
// });

scoreRouter.get('/scores', (request, response) => {
  scores = scores.sort((a,b) => b.score - a.score);
  let highestScore = scores[0].value;
  response.status(200).json(scores, highestScore);
});

// READ SCORES BIGGER THAN

scoreRouter.get('/scores-bigger-than/:value', (request, response) => {
  const scoresBiggerThan = (scoresArr, value) => {
    let scoresBiggerThanArr = [];
    scoresArr.forEach(score => {
      if(score.score.value > value) {
        scoresBiggerThanArr.push(score);
      }
    });
    return scoresBiggerThanArr;
  };
  let scores = scoresBiggerThan(scores, response.body.value);
  response.status(200).json(scores);
});

// UPDATE
// scoreRouter.put('/scores/:id', (request, response) => {
//   scores = scores.map(score => {
//     if(score._id === request.params.id) {
//       return {
//         _id: request.params.id,
//         name: request.body.name,
//       };
//     } else {
//       return score;
//     }
//   });
//   response.status(200).json(scores);
// });

// DELETE

scoreRouter.delete('/scores/:id', (request, response, next) => {
  scores = scores.filter(score => score._id !== request.params.id);
  response.status(200).json(scores);
});


module.exports = scoreRouter;