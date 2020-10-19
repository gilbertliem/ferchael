import React from "react";
import styles from "./Step.module.css";
import email from "../../assets/step/email.png";
import meet from "../../assets/step/g4yp58.svg";
import deal from "../../assets/step/97284.png";

function Step() {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.col}>
          <img src={email} alt="Send E-mail" className={styles.icon} />
          <div className={styles.head}>ask</div>
          <div className={styles.para}>
            Send us your inquery, we will reach you out in less than 48 hours.
          </div>
        </div>
        <div className={styles.col}>
          <img src={meet} alt="Meet" className={styles.icon} />
          <div className={styles.head}>meet</div>
          <div className={styles.para}>
            Arrange the time to discuss your inquery with our professional
            interior designer
          </div>
        </div>
        <div className={styles.col}>
          <img src={deal} alt="Deal" className={styles.icon} />
          <div className={styles.head}>deal</div>
          <div className={styles.para}>
            Sign the document(s), and we will make your dream comes true
          </div>
        </div>
      </div>
    </>
  );
}

export default Step;
