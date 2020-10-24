import React from "react";
import styles from "./Location.module.css";
import map from "../../assets/location/indonesia.jpg";
import particle from "../../assets/location/particles.mp4";

function Location() {
  return (
    <>
      {/* <video src={particle} className={styles.location} autoplay muted loop> */}
      <div className={styles.location}>
        <div className={styles.row}>
          <div className={styles.cont}>
            <div className={styles.para}>
              We are based in Surabaya, Indonesia. However, we are still able to
              provide our service to everyone of you who located outside
              Surabaya. Send your inquery through <strong>contact us</strong>{" "}
              and we will reach you out to discuss
            </div>
          </div>
          <div className={styles.cont}>
            <div className={styles.box}>
              <img src={map} alt="Surabaya" className={styles.map} />
            </div>
          </div>
        </div>
      </div>
      {/* </video> */}
    </>
  );
}

export default Location;
