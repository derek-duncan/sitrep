import React, { PropTypes, Component } from 'react';
import './Member.css';

import Time from '../Time/Time';
import Icon from '../Icon/Icon';
import CircleIcon from '../CircleIcon/CircleIcon';

class Member extends Component {
  render() {
    const { first_name, last_name, timezone } = this.props.member;
    const name = `${first_name} ${last_name}`;
    const randomImage = "https://source.unsplash.com/category/people/100x100";

    return (
      <div className="left-align">
        <div className="sm-flex items-center bg-dark1">
          <div className="relative">
            <div className="a-diamond-crop">
              <div className="a-diamond-crop-img bg-size-cover bg-position-center" style={{ backgroundImage: `url(${randomImage})` }}></div>
            </div>
            <span className="a-avatar-icon absolute">
              <Icon type="check" style={{ width: 25 }} />
            </span>
          </div>
          <div className="flex justify-between col-12 py1 px2">
            <div>
              <h3 className="m0 p0 font-size-4 line-height-1 color-gry-light1">{name}</h3>
              <p className="m0 p0 font-size-1 color-gry1">Checked in at 10:13 PM</p>
            </div>
            <div className="flex items-center">
              <span className="mx1">
                <Time timeZone={timezone} />
              </span>
              <CircleIcon className="mx1" color="light">
                <Icon type="calendar" />
              </CircleIcon>
              <CircleIcon className="mx1" color="light">
                <Icon type="high-five" />
              </CircleIcon>
              <CircleIcon className="mx1" color="light">
                <Icon type="poke" />
              </CircleIcon>
              <CircleIcon className="mx1 hover-rotate-180 transition-transform">
                <Icon type="down-arrow" />
              </CircleIcon>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Member.propTypes = {
  member: PropTypes.object,
};

export default Member;
