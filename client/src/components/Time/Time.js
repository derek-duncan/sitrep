import React, { PropTypes, Component } from 'react';
import moment from 'moment-timezone';
import classNames from 'classnames';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment(),
    };
    this.tick = this.tick.bind(this);
  }
  tick() {
    this.setState({ time: this.state.time.add(1, 's') });
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  render() {
    const { timeZone } = this.props;
    const timeFormat = 'hh:mm A';
    const localTime = this.state.time.clone();
    const inputTime = this.state.time.clone().tz(timeZone);

    // compare the timezone to local time
    const localTimeHour = parseInt(localTime.format('h'), 10);
    const inputTimeHour = parseInt(inputTime.format('h'), 10);
    const timeDifference = Math.abs(inputTimeHour - localTimeHour);

    let variationClasses = 'bg-dark3';
    if (timeDifference >= 1) variationClasses = 'bg-blue1';
    if (timeDifference >= 2) variationClasses = 'bg-blue2';

    const classes = classNames(
      'block',
      'p1',
      'bold',
      'font-size-2',
      'line-height-1',
      'color-gry-light2',
      variationClasses
    );

    return (
      <span className={classes} style={{ borderRadius: 20 }}>
        {inputTime.format(timeFormat)}
      </span>
    );
  }
}

Time.propTypes = {
  timeZone: PropTypes.string,
};

export default Time;
