import React, { PropTypes } from 'react';
import calendarIcon from '../../../assets/calendar-icon.svg'
import highFiveIcon from '../../../assets/high-five-icon.svg'
import pokeIcon from '../../../assets/hand-pointer-icon.svg'
import checkedIcon from '../../../assets/status-checked-icon.svg'
import downArrowIcon from '../../../assets/down-arrow-icon.svg'

const Icon = (props) => {
  const { type, ...otherProps } = props;

  let icon;
  switch (type) {
    case 'calendar':
      icon = calendarIcon;
      break;
    case 'high-five':
      icon = highFiveIcon;
      break;
    case 'poke':
      icon = pokeIcon;
      break;
    case 'check':
      icon = checkedIcon;
      break;
    case 'down-arrow':
      icon = downArrowIcon;
      break;
    default:
      return false;
  }
  return (
    <img src={icon} role="presentation" style={{ width: 20 }} {...otherProps} />
  );
}

Icon.propTypes = {
  type: PropTypes.string,
};

export default Icon;
