import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import DateToday from '../DateToday/DateToday';

import './You.css';

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
  handleInputChange(e) {
    e.preventDefault();
    this.setState({
      message: this.refs.messageInput.value,
    });
  }
  handleButtonPress(e) {
    e.preventDefault();
    const message = this.refs.messageInput.value;
    if (message.length) {
      this.sendMessage(message);
      this.refs.messageInput.value = '';
    } else {
      return;
    }
  }
  sendMessage(message) {
    fetch('/api/members/2/status-messages', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status_message: {
          message,
        },
      }),
    })
    .then((response) => {
      return response.json()
    })
  }
  render() {
    return (
      <div>
        <h4 className="m0 mb1 p0 font-size-2 regular color-gry1">You</h4>
        <div className="flex flex-column justify-center p2 bg-dark1">
          <h3 className="block m0 p0 bold font-size-4 color-gry-light2"><DateToday /></h3>
          <input
            className="block m0 mt1 p0 pb1 border-none border-bottom border-gry1 font-size-3 regular bg-none color-gry1 outline-none"
            ref="messageInput"
            type="text"
            placeholder="Type a status update here..."
            onChange={this.handleInputChange} />
          <button
            className="inline-block p1 mt1 border-none outline-none font-size-2 bold bg-blue1 color-gry-light1 hover-bg-blue2 transition-bg cursor-pointer"
            onClick={this.handleButtonPress}>
            Send
          </button>
        </div>
      </div>
    );
  }
}

Template.propTypes = {
};

export default Template;
