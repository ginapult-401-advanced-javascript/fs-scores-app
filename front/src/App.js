import React from 'react';
import {connect} from 'react-redux';
import Score from './Score.js';
import AddScore from './Add-score.js';
import { fetchAllScores } from './actions/score-actions.js';
import './App.css';

const API_URL = 'http://localhost:8080';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadStore();
  }

  render() {
    return(
      <>
        <p>Scores App is rendering!</p>
        <h1>High Scores</h1>
        <ul>
          {
            this.props.scores.map(score => <Score key={score.id} score={score} />)
            // <li>{score.name} - {score.score}</li>
          }
        </ul>
        <AddScore />
    </>
    )
  }
}

const mapStateToProps = (state) => ({
  scores: state.scores,
})

const mapDispatchToProps = (dispatch) => ({

  loadStore : () => {
    dispatch(fetchAllScores());
  },

});

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
