// Order library > component > image > css
import React from 'react';
import './styles.scss';

const Input = ({ className, ...rest }) => {
  const newClass = ['form-control', className].join(' ');

  return (
    <div className="form-group">
      <label for="input">New Word</label>
      <input
        type="text"
        className={newClass}
        name="input"
        id="input"
        placeholder="enter key..."
        {...rest}
      />
    </div>
  );
};
export default Input;
