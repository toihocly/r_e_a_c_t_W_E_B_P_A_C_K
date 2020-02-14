import React from "react";
import { ComponentA } from "./components";
import LogoImage from "./assets/images/images.png";
import LogoSVG from "./assets/images/react.svg";
import "./styles.scss";

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <img
          className="img__center"
          src={"https://www.w3schools.com/howto/img_snow_wide.jpg"}
          alt=""
        />
        <div className="header_content">
          <img className="img__a" src={LogoImage} alt="" />
          <img className="img__b" src={LogoSVG} alt="" />
        </div>
      </div>
      <h1>Hello World</h1>
      <ComponentA />
    </div>
  );
};
export default App;
