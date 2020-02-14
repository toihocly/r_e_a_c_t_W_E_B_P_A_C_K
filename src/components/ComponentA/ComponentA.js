// Order library > component > image > css
import React, { useState, useEffect } from "react";
import { ComponentB } from "../ComponentB";
import { ComponentC } from "../ComponentC";
import "./styles.scss";

const ComponentA = () => {
  const [count, setCount] = useState(0);

  const handleCount = value => {
    setCount(value);
  };
  return (
    <div className="cpa">
      <h3>count</h3>
      <ComponentB count={count} />
      <ComponentC onChangeCount={handleCount} />
    </div>
  );
};
export default ComponentA;
