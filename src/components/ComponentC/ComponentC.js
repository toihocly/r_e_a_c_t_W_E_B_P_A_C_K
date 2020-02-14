// Order library > component > image > css
import React, { useState, useEffect } from "react";
import "./styles.scss";

const ComponentC = props => {
  const { onChangeCount } = props;
  return (
    <div className="cpc">
      <button className="button__custom">increase</button>
      <button className="button__custom">decrease</button>
      <button className="button__custom">reset</button>
    </div>
  );
};
export default ComponentC;
