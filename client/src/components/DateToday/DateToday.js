import React from 'react';
import moment from 'moment';

const DateToday = (props) => {
  const today = moment();
  return (
    <span>{today.format('dddd, MMMM Do, YYYY')}</span>
  );
};

export default DateToday;
