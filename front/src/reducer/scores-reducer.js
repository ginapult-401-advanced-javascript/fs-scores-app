const initState = [];

export default (state = initState, {type, payload}) => {
  switch(type) {

    case 'CREATE_SCORE':
      return [...state, payload];

    case 'READ_ALL_SCORES':
      return payload;

    case 'READ_ONE_SCORE':
      break;

    case 'UPDATE_SCORE':
      return state.map((score) => {
        if(score.id === payload.id) {
          score.name = payload.name;
        }
        return score;
      });

    case 'DELETE_SCORE':
      return state.filter((score) => score.id !== payload.id);

    default:
      return state;
  }
}