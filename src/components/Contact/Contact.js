import React from "react";
import * as emailjs from "emailjs-com";
import styles from "./Contact.module.css";

function Contact() {
  const sendEmail = (e) => {
    console.log(e.target);
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_ferchael",
        // "template_srlk2bf",
        e.target,
        "user_K3T9MuCc6hH1WG0OrwtBT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    console.log("test");
  };

  return (
    <>
      <form action="" className={styles.contact} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" className={styles.input} />
        <label htmlFor="number">Phone Number:</label>
        <input type="text" name="number" id="number" className={styles.input} />
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" className={styles.input} />
        <label htmlFor="inquiry">Inquiry:</label>
        <input
          type="text"
          name="inquiry"
          id="inquiry"
          className={styles.input}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          className={styles.message}
        ></textarea>
        <div className={styles.submit}>
          <div>
            <input type="submit" value="submit" className={styles.submitBtn} />
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
