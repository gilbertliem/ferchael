import React, { Component } from "react";
import "./Footer.css";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import linked from "./images/linked.png";

// ==================== //

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="logo">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={linked} alt="" />
        </div>
        <p>Copyright 2020</p>
      </div>
    );
  }
}
