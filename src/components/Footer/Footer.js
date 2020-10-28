import React, { Component } from "react";
import styles from "./Footer.module.css";
import instagram from "../../assets/footer/instagram.png";

// ==================== //

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className={styles.footer}>
          <div className={styles.logo}>
            <a href="https://www.instagram.com/ferchael.interior/">
              <img src={instagram} alt="" />
            </a>
          </div>
          <p>Copyright © 2020. All Rights Reserved.</p>
        </div>
      </>
    );
  }
}
