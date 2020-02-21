// Order library > component > image > css
import React from 'react';
import './styles.scss';

const Button = ({ children, className, ...rest }) => {
  const newClass = ['btn btn-outline-primary', className].join(' ');
  return (
    <button type="button" className={newClass} {...rest}>
      {children}
    </button>
  );
};
export default Button;
