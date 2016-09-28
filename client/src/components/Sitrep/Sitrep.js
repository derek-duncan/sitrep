import React, { Component } from 'react';
import './Sitrep.css';
import fetch from 'isomorphic-fetch';
import logo from '../../../assets/sitrep-logo.svg';
import loader from '../../../assets/loader.svg';

import Member from '../Member/Member';
import You from '../You/You';
import CreateTeamForm from '../CreateTeamForm/CreateTeamForm';

class Sitrep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {},
      isLoading: true,
    };
  }
  componentDidMount() {
    fetch('/api/teams/1')
      .then((data) => data.json())
      .then((response) => {
        this.setState({ team: response.data, isLoading: false })
      })
      .catch((err) => {
        this.setState({ isLoading: false })
      });
  }
  render() {
    let content;

    if (this.state.isLoading) {
      content = (
        <div className="flex items-center justify-center italic" style={{ height: '100vh' }}>
          <img src={loader} alt="Loading..." style={{ width: 40 }} />
        </div>
      );
    } else if (!this.state.team.members) {
      content = (
        <div className="my3">
          <CreateTeamForm />
        </div>
      );
    } else {
      const members = this.state.team.members
        .sort((a, b) => { // sort alphabetically
          if (a.first_name < b.first_name) return -1;
          if (a.first_name > b.first_name) return 1;
          return 0;
        })
        .map((member, i) => { // create member components
          return <Member member={member} key={i} />;
        });

        content = (
          <div className="left-align my3">
            <div className="my3">
              <You />
            </div>
            <div className="my3">
              <h4 className="m0 mb1 p0 font-size-2 regular color-gry1">Team</h4>
              {members}
            </div>
          </div>
        )
    }

    return (
      <div className="center p3 font-size-3">
        <img src={logo} alt="Sitrep" className="" />
        <div className="mx-auto" style={{ maxWidth: 720 }}>
          {content}
        </div>
      </div>
    );
  }
}

export default Sitrep;
