// Order library > component > image > css
import React, { useState, useEffect } from "react";
import "./styles.scss";

const ComponentB = props => {
  // const ComponentB = ({count}) =>{
  const { count } = props; //

  return (
    <div className="cpb">
      <h1>{count}</h1>
    </div>
  );
};
export default ComponentB;
