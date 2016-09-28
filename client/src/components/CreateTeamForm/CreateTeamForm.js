import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Icon from '../Icon/Icon';
import CircleIcon from '../CircleIcon/CircleIcon';

import './CreateTeamForm.css';

class CreateTeamForm extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const form = document.forms['createTeam'];
    const body = {
      team: {
        name: form.name.value,
      },
    };
    fetch('/api/teams', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });
  }
  render() {
    return (
      <div className="left-align">
        <h4 className="m0 mb1 p0 font-size-2 regular color-gry1">You</h4>
        <div className="col-12 p2 bg-dark1">
          <form
            name="createTeam"
            action="/api/teams"
            method="post"
            className="flex col-12"
            onSubmit={this.onFormSubmit}>
            <input
              name="name"
              type="text"
              autoComplete="off"
              className="grow-1 block m0 mt1 p0 pb1 border-none border-bottom border-gry1 font-size-3 regular bg-none color-gry1 outline-none"
              placeholder="Your team's name..." />
            <button type="submit" className="inline-block p0 m0 ml2 border-none bg-none outline-none">
              <CircleIcon color="primary">
                <Icon type="check" size="small" />
              </CircleIcon>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

CreateTeamForm.propTypes = {
};

export default CreateTeamForm;
