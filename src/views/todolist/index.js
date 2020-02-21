import React, { useState, useEffect } from 'react';
import { InputAction, Filter, ViewAction } from './components';

const TodoList = () => {
  return (
    <div>
      <InputAction />
      <Filter />
      <ViewAction />
    </div>
  );
};
export default TodoList;
