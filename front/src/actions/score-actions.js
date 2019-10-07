import superagent from 'superagent';

const API_URL = 'http://localhost:8080';

// dispatch
const readAllScores = (scores) => {
  return {
    type: 'READ_ALL_SCORES',
    payload: scores,
  }
}

// action creator
export const fetchAllScores = () => {
  return (dispatch) => {
    return superagent.get(`${API_URL}/scores`)
      .then(results => {
        console.log(results.body);
        dispatch(readAllScores(results.body));
      })
  }
}

// dispatch
const CREATE_SCORE = (name, id, score) => {
  return {
    type: 'CREATE_SCORE',
    payload: {
      _id: id,
      name: name,
      score: score,
    }
  }
}

// action creator
export const createScore = (name, score) => {
  return (dispatch) => {
    return superagent.post(`${API_URL}/scores`)
    .send(name, score)
    .then(results => {
      console.log(results.body.id);
      dispatch(CREATE_SCORE(name, results.body.id, score));
    })
  }
}