import React from 'react';
import classNames from 'classnames';

const CircleIcon = (props) => {
  const { color, className, children, ...otherProps } = props;

  const isLight = color === 'light';
  const isBlue = color === 'blue';
  const isPrimary = color === 'primary';
  const classes = classNames(
    'flex',
    'items-center',
    'justify-center',
    'p1',
    'circle',
    'transition-bg',
    'cursor-pointer',
    {
      'bg-gry-light1': isLight,
      'hover-bg-gry-light2': isLight,
      'bg-blue1': isBlue,
      'hover-bg-blue2': isBlue,
      'bg-primary': isPrimary,
      'hover-bg-primary': isPrimary,
    },
    className
  );
  return (
    <span className={classes} {...otherProps}>
      {children}
    </span>
  );
}

export default CircleIcon;
