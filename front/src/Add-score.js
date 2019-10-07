import React from 'react';
import {connect} from 'react-redux';
import { createScore } from './actions/score-actions.js';



class AddScore extends React.Component {
  constructor (props) {
    super (props);
    this.state={
      name: '',
      score: '',
    }
  }

  handleChangeName = (event) => {
    this.setState({name: event.target.value})
  }

  handleChangeScore = (event) => {
    this.setState({score: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createScore(this.state.name, this.state.score);
    console.log(this.state);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
        <input
        type='text'
        value={this.state.name}
        onChange={this.handleChangeName}
        placeholder='Name'
        />
        </label>
        <label>
          Score
        <input
        type='number'
        value={this.state.score}
        onChange={this.handleChangeScore}
        placeholder='Score'
        />
        </label>
        <button type='submit'>Add Score</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({

  createScore : (name) => {
    dispatch(createScore(name));
  }
});

export default connect(null, mapDispatchToProps)(AddScore);