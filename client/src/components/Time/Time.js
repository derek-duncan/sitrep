import React, { PropTypes, Component } from 'react';
import moment from 'moment-timezone';
import classNames from 'classnames';

class Time extends Component {
  render() {
    const { timeZone } = this.props;
    const format = 'hh:mm A';
    const localTime = moment().format(format)
    const time = moment().tz(timeZone).format(format);

    const isDifferentTimezone = time !== localTime;
    const classes = classNames({
      'color-accent-orange': isDifferentTimezone,
    });

    return <span className={classes}>{time}</span>
  }
}

Time.propTypes = {
  timeZone: PropTypes.string,
};

export default Time;
