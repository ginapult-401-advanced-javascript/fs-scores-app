import React from 'react';
import {connect} from 'react-redux';
import superagent from 'superagent';
import { fetchAllScores } from './actions/score-actions.js';


const API_URL = 'http://localhost:8080';

class Score extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      score: null,
    };
  }

  handleUpdate = (event) => {
    event.preventDefault();

    superagent.put(`${API_URL}/scores/${this.props.score._id}`)
    .send(this.state)
    .then(results => {
      this.props.loadStore(results.body);
    })
    .catch(console.log);
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleDelete = (event) => {
    event.preventDefault();

    superagent.delete(`${API_URL}/scores/${this.props.score._id}`)
    .then(results => {
      this.props.loadStore(results.body);
    })
    .catch(console.log);
  };

  render() {
    console.log(this.props);
    return (
    <>
    <li key={this.props.score._id}>
    {this.props.score.name} - {this.props.score.score} points
    {/* <form onSubmit={this.handleUpdate}> */}
        {/* <input
        type='text'
        value={this.state.name}
        onChange={this.handleChange}
        />
        <button type='submit'>Update Me</button> */}
    {/* </form> */}
        <button onClick={this.handleDelete}>Delete</button>
    </li>

    </>
    );
  }
}

// once you add the above, it will render the buttons on the front end

const mapDispatchToProps = (dispatch) => ({
  loadStore : () => {
    dispatch(fetchAllScores());
  },
});

// export default App;
export default connect(null, mapDispatchToProps)(Score);