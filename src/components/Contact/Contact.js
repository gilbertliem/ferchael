import React from "react";
import * as emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";

function Contact() {
  // FORM //
  const { register, errors } = useForm({ mode: "onBlur" });
  // EMAIL //
  const sendEmail = (e) => {
    console.log(e.target);
    // e.preventDefault();

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
    console.log("success");
    alert("Your Inquiry has been sent!");
  };

  return (
    <>
      <form action="" className={styles.contact} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name .."
          className={styles.input}
          ref={register({ required: true })}
        />
        {errors.name && errors.name.type === "required" && (
          <span className={styles.alert}>Required</span>
        )}
        <label htmlFor="number">Phone Number:</label>
        <input
          type="text"
          name="number"
          id="number"
          placeholder="+62 ..."
          className={styles.input}
          ref={register({ required: true })}
        />
        {errors.number && errors.number.type === "required" && (
          <span className={styles.alert}>Required</span>
        )}
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@gmail.com"
          className={styles.input}
          ref={register({ required: true })}
        />
        {errors.email && errors.email.type === "required" && (
          <span className={styles.alert}>Required</span>
        )}
        <label htmlFor="inquiry">Inquiry:</label>
        <input
          type="text"
          name="inquiry"
          id="inquiry"
          placeholder="e.g. Kitchen Design"
          className={styles.input}
          ref={register({ required: true })}
        />
        {errors.inquiry && errors.inquiry.type === "required" && (
          <span className={styles.alert}>Required</span>
        )}
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          placeholder="Write the details here.."
          className={styles.message}
          ref={register({ required: true })}
        ></textarea>
        {errors.message && errors.message.type === "required" && (
          <span className={styles.alert}>Required</span>
        )}
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
