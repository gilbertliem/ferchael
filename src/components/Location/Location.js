import React from "react";
import styles from "./Location.module.css";
import map from "../../assets/location/indonesia.jpg";

function Location() {
  return (
    <>
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
          <div>
            {/* <div className={styles.map}> */}
            {/* <img src={map} alt="Surabaya" /> */}
            {/* </div> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506584.92719152605!2d112.43248517783398!3d-7.275533380936384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20Surabaya%20City%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1602945568093!5m2!1sen!2sid"
              frameborder="0"
              style={{ border: 1 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
