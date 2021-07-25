import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

  handleInputChange = (event) => {
    this.props.dispatch({ type: 'UPDATEINPUT', event: event })
  }

  handleOnSubmit = (event) => {
    console.log(this.props)
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_USER', user: this.props.user })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            type="text"
            id="username"
            onChange={this.handleInputChange}
            placeholder="username"
          />
        </p>
        <p>
          <input
            type="text"
            id="hometown"
            onChange={this.handleInputChange}
            placeholder="hometown"
          />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

const msp = (s) => {
  return {
    user: {
      username: s.username,
      hometown: s.hometown
    }
  }
}

export default connect(msp)(UserInput);
