import React, { useState, useEffect } from "react";
import styles from "./Galery.module.css";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { act } from "react-dom/test-utils";

// ==================== //

const image = [
  {
    id: 1,
    category: "kitchen",
    img: require("../../assets/kitchen/kitchen1.jpeg"),
  },
  {
    id: 2,
    category: "kitchen",
    img: require("../../assets/kitchen/kitchen2.jpeg"),
  },
  {
    id: 3,
    category: "kitchen",
    img: require("../../assets/kitchen/kitchen3.jpeg"),
  },
  {
    id: 4,
    category: "kitchen",
    img: require("../../assets/kitchen/kitchen4.jpeg"),
  },
  {
    id: 5,
    category: "kitchen",
    img: require("../../assets/kitchen/kitchen5.jpeg"),
  },
  {
    id: 6,
    category: "kitchen",
    img: require("../../assets/kitchen/kitchen6.jpeg"),
  },
  // {
  //   id: 7,
  //   category: "kitchen",
  //   img: require("../../assets/kitchen/kitchen7.jpeg"),
  // },
  // {
  //   id: 8,
  //   category: "kitchen",
  //   img: require("../../assets/kitchen/kitchen8.jpeg"),
  // },
  // {
  //   id: 9,
  //   category: "kitchen",
  //   img: require("../../assets/kitchen/kitchen9.jpeg"),
  // },
  {
    id: 10,
    category: "kitchen",
    img: require("../../assets/kitchen/kitchen10.jpeg"),
  },
  {
    id: 11,
    category: "cupboard",
    img: require("../../assets/drobe/drobe1.jpeg"),
  },
  {
    id: 12,
    category: "cupboard",
    img: require("../../assets/drobe/drobe2.jpeg"),
  },
  {
    id: 13,
    category: "dining",
    img: require("../../assets/dining/dining1.jpeg"),
  },
  {
    id: 14,
    category: "bedroom",
    img: require("../../assets/bed/bed1.jpeg"),
  },
  {
    id: 15,
    category: "bedroom",
    img: require("../../assets/bed/bed2.jpeg"),
  },
  {
    id: 16,
    category: "bedroom",
    img: require("../../assets/bed/bed3.jpeg"),
  },
  {
    id: 17,
    category: "bedroom",
    img: require("../../assets/bed/bed4.jpeg"),
  },
  {
    id: 18,
    category: "bedroom",
    img: require("../../assets/bed/bed5.jpeg"),
  },
  {
    id: 19,
    category: "wardrobe",
    img: require("../../assets/wardrobe/wardrobe1.jpeg"),
  },
  {
    id: 20,
    category: "wardrobe",
    img: require("../../assets/wardrobe/wardrobe2.jpeg"),
  },
  {
    id: 21,
    category: "wardrobe",
    img: require("../../assets/wardrobe/wardrobe3.jpeg"),
  },
  {
    id: 22,
    category: "wardrobe",
    img: require("../../assets/wardrobe/wardrobe4.jpeg"),
  },
  {
    id: 23,
    category: "wardrobe",
    img: require("../../assets/wardrobe/wardrobe5.jpeg"),
  },
  {
    id: 24,
    category: "wardrobe",
    img: require("../../assets/wardrobe/wardrobe6.jpeg"),
  },
  {
    id: 25,
    category: "apartment",
    img: require("../../assets/apart/apart1.jpeg"),
  },
  {
    id: 26,
    category: "apartment",
    img: require("../../assets/apart/apart2.jpeg"),
  },
  {
    id: 27,
    category: "apartment",
    img: require("../../assets/apart/apart3.jpeg"),
  },
  {
    id: 28,
    category: "living",
    img: require("../../assets/living/living1.jpeg"),
  },
  {
    id: 29,
    category: "living",
    img: require("../../assets/living/living2.jpeg"),
  },
  {
    id: 30,
    category: "living",
    img: require("../../assets/living/living3.jpeg"),
  },
  {
    id: 31,
    category: "living",
    img: require("../../assets/living/living4.jpeg"),
  },
  {
    id: 32,
    category: "living",
    img: require("../../assets/living/living5.jpeg"),
  },
  {
    id: 33,
    category: "resto",
    img: require("../../assets/resto/resto1.jpeg"),
  },
  {
    id: 34,
    category: "resto",
    img: require("../../assets/resto/resto2.jpeg"),
  },
  {
    id: 35,
    category: "resto",
    img: require("../../assets/resto/resto3.jpeg"),
  },
  {
    id: 36,
    category: "resto",
    img: require("../../assets/resto/resto4.jpeg"),
  },
  {
    id: 37,
    category: "resto",
    img: require("../../assets/resto/resto5.jpeg"),
  },
];

const genre = [
  {
    id: 1,
    category: "all",
  },
  {
    id: 2,
    category: "kitchen",
  },
  {
    id: 3,
    category: "bedroom",
  },
  {
    id: 4,
    category: "dining",
  },
  {
    id: 5,
    category: "wardrobe",
  },
  {
    id: 6,
    category: "cupboard",
  },
  {
    id: 7,
    category: "apartment",
  },
  {
    id: 8,
    category: "living",
  },
  {
    id: 9,
    category: "resto",
  },
];

// ==================== //

const customStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

// ==================== //

function Galery() {
  const display = image;
  const type = genre;
  // console.log(type);

  const [open, setOpen] = useState(false);
  let [state, setstate] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [activeClass, setActiveClass] = useState("active");

  useEffect(() => {
    setMovieList(display);
  }, []);

  const requestClose = () => setOpen(false);

  const openModal = (e) => {
    let id = e.target.id;
    // console.log(id);
    let detail = display.filter((item) => item.id == id);
    // console.log(detail);
    setstate(detail);
    // console.log(state);
    setOpen(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    fade: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const sort = (e) => {
    // console.log(e.target.textContent);
    let movieCategories = display.filter(
      (item) => item.category == e.target.textContent
    );
    // console.log(movieCategories);
    if (e.target.textContent == "all") {
      setMovieList(display);
    } else {
      setMovieList(movieCategories);
    }
    // console.log(movieList);
    console.log(e.target.className);
  };

  return (
    <>
      <div className={styles.galery}>
        <div className={styles.row}>
          <div className={styles.category}>
            <Slider {...settings}>
              {type.length > 0
                ? type.map((genres) => {
                    return (
                      // <div>
                      //   <input
                      //     type="radio"
                      //     name={genres.category}
                      //     id={genres.category}
                      //     key={genres.id}
                      //   />
                      //   <label htmlFor={genres.category}>
                      //     {genres.category}
                      //   </label>
                      // </div>
                      <button
                        className={styles.burger}
                        key={genres.id}
                        onClick={(e) => {
                          sort(e);
                        }}
                      >
                        {genres.category}
                      </button>
                    );
                  })
                : ""}
            </Slider>
          </div>
        </div>
        <ul className={styles.list}>
          {movieList.length > 0
            ? movieList.map((item) => {
                return (
                  <li key={item.id} className={styles.image}>
                    <img
                      onClick={(e) => openModal(e)}
                      src={item.img}
                      alt={item.id}
                      id={item.id}
                      className={styles.image}
                    />
                  </li>
                );
              })
            : "Galery's empty"}
          <Modal
            isOpen={open}
            shouldCloseOnOverlayClick={true}
            onRequestClose={requestClose}
            style={customStyle}
          >
            {state.length > 0
              ? state.map((item) => {
                  return (
                    <li key={item.id} className={styles.modal}>
                      <img src={item.img} alt={item.id} />
                    </li>
                  );
                })
              : ""}
          </Modal>
        </ul>
      </div>
    </>
  );
}

export default Galery;

/* <h1>{item.id}</h1> */
/* <img src={pict} alt={item.category} /> */
