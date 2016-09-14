import React, { Component } from 'react';
import './Sitrep.css';
import logo from '../assets/sitrep-logo.svg';
import checkedStatusIcon from '../assets/status-checked-icon.svg';
import reportIcon from '../assets/report-icon.svg';
const kanyeLogo = "http://img.ulximg.com/image/300x300/artist/1392767355_2048795ba3f4dc991a1fc473b51f1d8b.jpg/aaf8bc7f6eab3f73df8d833d2c07308c/1392767355_kanye_west_46.jpg";

class Sitrep extends Component {
  render() {
    return (
      <div className="center p3">
        <img src={logo} alt="Sitrep" className="" />
        <div className="left-align mx-auto" style={{ maxWidth: 600 }}>
          <div className="my3">
            <div className="flex items-start">
              <div className="relative">
                <img
                  src={kanyeLogo}
                  alt="Avatar"
                  className=""
                  style={{ maxWidth: 70, height: 'auto' }} />
                <img
                  src={checkedStatusIcon}
                  role="presentation"
                  className="absolute top-0 right-0"
                  style={{ width: 27, height: 27 }} />
              </div>
              <div className="pl2 left-align">
                <h3 className="m0 p0">Derek Duncan</h3>
                <p className="m0 p0">You know whiskey? Well, yeah… I had some.</p>
                <span className="block bold">12:21 PM</span>
              </div>
            </div>
            <div className="flex mt2">
              <div className="col-6">
                <h4 className="m0 mb2 p0">Reports</h4>
                <div className="flex items-start pb1">
                  <img src={reportIcon} role="presentation" className="mr2" style={{ width: 25 }} />
                  <div>
                    <p className="p0 m0 h6">1:07 PM on September 14th, 2016</p>
                    <h3 className="p0 m0">Daily Standup</h3>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <h4 className="m0 mb2 p0">Actions</h4>
                <div className="pb1">
                  <h3 className="p0 m0">Request a meeting.</h3>
                </div>
                <div className="pb1">
                  <h3 className="p0 m0">Give a high-five!</h3>
                </div>
                <div className="pb1">
                  <h3 className="p0 m0">Send a poke.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sitrep;
