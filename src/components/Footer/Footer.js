import React, { Component } from "react";
import styles from "./Footer.module.css";
import facebook from "../../assets/footer/facebook.png";
import instagram from "../../assets/footer/instagram.png";
import twitter from "../../assets/footer/twitter.png";
import linked from "../../assets/footer/linked.png";

// ==================== //

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className={styles.footer}>
          <div className={styles.logo}>
            {/* <img src={facebook} alt="" /> */}
            <a href="https://www.instagram.com/ferchael.interior/">
              <img src={instagram} alt="" />
            </a>
            {/* <img src={twitter} alt="" /> */}
            {/* <img src={linked} alt="" /> */}
          </div>
          <p>Copyright © 2020. All Rights Reserved.</p>
        </div>
      </>
    );
  }
}
