import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Contact from "../Contact/Contact";
import logo from "../../assets/navbar/logo.jpg";
import close from "../../assets/navbar/close.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overlay: {
      background: "black",
    },
  },
};

Modal.setAppElement("#root");

function Navbar() {
  const [open, setOpen] = useState(false);
  // const [switchOn, setSwitchOn] = useState(false);

  const requestClose = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  // const slide = () => {
  //   setSwitchOn(true);
  // };

  return (
    <>
      <nav>
        <ul className={styles.nav}>
          <Link to="./" className={styles.link}>
            <img src={logo} alt="ferchael" />
          </Link>
          <div className={styles.option}>
            <Link to="./galery" className={styles.galery}>
              galery
            </Link>
            <div onClick={openModal} className={styles.contact}>
              contact
            </div>
            <Modal
              isOpen={open}
              shouldCloseOnOverlayClick={false}
              onRequestClose={requestClose}
              style={customStyles}
            >
              <button onClick={() => setOpen(false)} className={styles.exit}>
                <img src={close} alt="close" className={styles.close} />
              </button>
              <Contact setOpen={setOpen} />
            </Modal>
          </div>
          {/* <div
            className={switchOn ? styles.navActive : styles.burger}
            onClick={slide}
          >
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div> */}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
