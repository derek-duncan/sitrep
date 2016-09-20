import React, { Component } from 'react';
import './Sitrep.css';
import fetch from 'isomorphic-fetch';
import logo from '../../../assets/sitrep-logo.svg';
import loader from '../../../assets/loader.svg';

import Member from '../Member/Member';
import You from '../You/You';

class Sitrep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {},
    };
  }
  componentDidMount() {
    fetch('/api/teams/1')
      .then((data) => data.json())
      .then((response) => {
        this.setState({ team: response.data })
      });
  }
  render() {
    if (!this.state.team.members) {
      return (
        <div className="flex items-center justify-center italic" style={{ height: '100vh' }}>
          <img src={loader} alt="Loading..." style={{ width: 40 }} />
        </div>
      );
    }

    const members = this.state.team.members
      // sort alphabetically
      .sort((a, b) => {
        if (a.first_name < b.first_name) return -1;
        if (a.first_name > b.first_name) return 1;
        return 0;
      })
      // create member components
      .map((member, i) => {
        return <Member member={member} key={i} />;
      });

    return (
      <div className="center p3 font-size-3">
        <img src={logo} alt="Sitrep" className="" />
        <div className="left-align mx-auto" style={{ maxWidth: 720 }}>
          <div className="my3">
            <You />
          </div>
          <div className="my3">
            <h4 className="m0 mb1 p0 font-size-2 regular color-gry1">Team</h4>
            {members}
          </div>
        </div>
      </div>
    );
  }
}

export default Sitrep;
