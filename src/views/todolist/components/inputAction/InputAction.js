// Order library > component > image > css
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Button } from 'Components';
import { todoListActions } from '../../../../actions';
import './styles.scss';

const InputAction = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChangeText = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setText(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // check text not null
    // dispatch valute to reducer
    if (text) {
      dispatch(todoListActions.addValue({ value: text, type: 'backlog' }));
      setText('');
    }
  };
  return (
    <div className="root">
      <form onSubmit={handleSubmit} className=" d-flex justify-content-center align-items-center">
        <Input name="text" value={text} onChange={handleChangeText} autoComplete="off" />
        <Button className="button__place" type="submit">
          Go
        </Button>
      </form>
    </div>
  );
};
export default InputAction;
