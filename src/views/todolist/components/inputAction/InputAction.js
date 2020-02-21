// Order library > component > image > css
import React, { useState, useEffect } from 'react';
import { Input, Button } from 'Components';
import './styles.scss';

const InputAction = () => {
  return (
    <div className="root d-flex justify-content-center align-items-center">
      <Input />
      <Button className="button__place">Go</Button>
    </div>
  );
};
export default InputAction;
