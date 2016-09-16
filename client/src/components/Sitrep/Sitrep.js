import React, { Component } from 'react';
import './Sitrep.css';
import fetch from 'isomorphic-fetch';
import logo from '../../../assets/sitrep-logo.svg';

import Member from '../Member/Member';

class Sitrep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {},
    };
  }
  componentDidMount() {
    fetch('http://localhost:4000/api/teams/1')
      .then((data) => data.json())
      .then((team) => this.setState({ data: team }));
  }
  render() {
    if (!this.state.team.members) return <p>Loading...</p>;

    const members = this.state.team.members.map((member) => {
      return <Member member={member} />;
    });

    return (
      <div className="center p3 font-size-3">
        <img src={logo} alt="Sitrep" className="" />
        <div className="left-align mx-auto" style={{ maxWidth: 600 }}>
          {members}
        </div>
      </div>
    );
  }
}

export default Sitrep;
