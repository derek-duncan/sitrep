import React, { Component } from 'react';
import './Sitrep.css';
import logo from '../../../assets/sitrep-logo.svg';

import Member from '../Member/Member';

class Sitrep extends Component {
  render() {
    return (
      <div className="center p3 font-size-3">
        <img src={logo} alt="Sitrep" className="" />
        <div className="left-align mx-auto" style={{ maxWidth: 600 }}>
          <Member />
        </div>
      </div>
    );
  }
}

export default Sitrep;
