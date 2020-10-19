import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Contact from "../Contact/Contact";
import logo from "../../assets/navbar/logo.jpg";
import close from "../../assets/navbar/close.svg";

const customStyles = {
  content: {
    // width: "50rem",
    // height: "50rem",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // background: "#777373",
    overlay: {
      background: "black",
    },
  },
};

Modal.setAppElement("#root");

function Navbar() {
  const [open, setOpen] = useState(false);

  const requestClose = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <nav>
        <ul className={styles.nav}>
          <Link to="./">
            <img src={logo} alt="ferchael" className={styles.logo} />
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
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
