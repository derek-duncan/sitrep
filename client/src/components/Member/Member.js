import React, { PropTypes, Component } from 'react';
import './Member.css';

import checkedStatusIcon from '../../../assets/status-checked-icon.svg';
import reportIcon from '../../../assets/report-icon.svg';
import calendarIcon from '../../../assets/calendar-icon.svg';
import highFiveIcon from '../../../assets/high-five-icon.svg';
import handPointerIcon from '../../../assets/hand-pointer-icon.svg';
const kanyeLogo = "https://goo.gl/99123r";

class Member extends Component {
  getDefaultProps() {}
  componentWillMount() {}
  componentDidMount() {}
  render() {
    return (
      <div className="my2 py2 border-bottom border-gry">
        <div className="sm-flex items-start">
          <div className="relative mb3 sm-m0">
            <div className="a-diamond-crop">
              <div className="a-diamond-crop-img bg-size-cover bg-position-center" style={{ backgroundImage: `url(${kanyeLogo})` }}></div>
            </div>
            <img src={checkedStatusIcon} role="presentation" className="a-avatar-icon absolute" />
          </div>
          <div className="sm-pl2 left-align">
            <h3 className="m0 p0 font-size-5 line-height-1">Derek Duncan</h3>
            <p className="m0 p0">You know whiskey? Well, yeah… I had some.</p>
            <div className="font-size-2 color-gry">
              <a href="mailto:mail@derekduncan.me">mail@derekduncan.me</a>
              <span className="px1">|</span>
              <a href="tel:9188633601" className="">918-863-3601</a>
              <span className="px1">|</span>
              <span className="">12:21 PM</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt2">
          <div className="col-12 sm-col-6 mb2">
            <h4 className="m0 mb1 p0 font-size-4">Reports</h4>
            <div className="flex items-center mb1 cursor-pointer">
              <img src={reportIcon} role="presentation" className="a-action-icon mr1" />
              <div>
                <p className="p0 m0 font-size-2 color-gry">1:07 PM on September 14th, 2016</p>
                <a className="p0 m0 font-size-4 line-height-1">Daily Standup</a>
              </div>
            </div>
            <span className="block mt2 cursor-pointer">Expand 3 more +</span>
          </div>
          <div className="col-12 sm-col-6 mb2">
            <h4 className="m0 mb1 p0 font-size-4">Actions</h4>
            <div className="flex items-center cursor-pointer">
              <img src={calendarIcon} role="presentation" className="a-action-icon mr1" />
              <a className="p0 m0 font-size-4">Request a meeting.</a>
            </div>
            <div className="flex items-center cursor-pointer">
              <img src={highFiveIcon} role="presentation" className="a-action-icon mr1" />
              <a className="p0 m0 font-size-4">Give a high-five!</a>
            </div>
            <div className="flex items-center cursor-pointer">
              <img src={handPointerIcon} role="presentation" className="a-action-icon mr1" />
              <a className="p0 m0 font-size-4">Send a poke.</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Member.propTypes = {
};

export default Member;
