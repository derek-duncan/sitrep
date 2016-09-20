import React, { PropTypes, Component } from 'react';
import fetch from 'isomorphic-fetch';
import './Member.css';

import Time from '../Time/Time';
import Icon from '../Icon/Icon';
import CircleIcon from '../CircleIcon/CircleIcon';

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this.getStatusMessages = this.getStatusMessages.bind(this);
  }
  componentDidMount() {
    const member_id = this.props.member.id;
    this.getStatusMessages(member_id)
      .then((messages) => {
        this.setState({
          messages: messages,
        });
      });
  }
  getStatusMessages() {
    return fetch(`/api/members/${this.props.member.id}/status-messages`)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        return json.data;
      });
  }
  render() {
    const { id, first_name, last_name, timezone } = this.props.member;
    const name = `${first_name} ${last_name}`;
    const randomImage = "https://source.unsplash.com/category/people/100x100";

    return (
      <div className="left-align">
        <div className="sm-flex items-center py1 bg-dark1">
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
              <a
                className="m0 p0 font-size-4 bold line-height-1 text-decoration-none color-gry-light1"
                href={`http://localhost:4000/api/members/${id}`}
                target="_blank">
                {name}
              </a>
              <p className="m0 p0 font-size-1 color-gry1">Checked in at 10:13 PM</p>
              <p className="m0 p0 font-size-1 color-gry1">{this.state.messages.length} messages</p>
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
