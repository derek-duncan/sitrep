import React, { PropTypes } from 'react';
import calendarIcon from '../../../assets/calendar-icon.svg'
import highFiveIcon from '../../../assets/high-five-icon.svg'
import pokeIcon from '../../../assets/hand-pointer-icon.svg'
import checkedIcon from '../../../assets/status-checked-icon.svg'
import downArrowIcon from '../../../assets/down-arrow-icon.svg'
import dotsIcon from '../../../assets/dots-icon.svg'

const Icon = (props) => {
  const { type, size, ...otherProps } = props;

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
    case 'dots':
      icon = dotsIcon;
      break;
    default:
      return false;
  }

	let diameter;
	switch (size) {
		case 'small':
			diameter = 12;
			break;
		case 'normal':
			diameter = 20;
			break;
		case 'medium':
			diameter = 25;
			break;
		default:
			diameter = 20;
	}

  return (
    <img src={icon} role="presentation" style={{ width: diameter, minHeight: diameter }} {...otherProps} />
  );
}

Icon.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
};

Icon.defaultProps = {
	size: 'normal',
};

export default Icon;
