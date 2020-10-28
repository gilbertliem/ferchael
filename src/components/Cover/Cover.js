import React from "react";
import styles from "./Cover.module.css";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// ==================== //

const image = [
  {
    id: 6,
    category: "kitchen",
    img: require("../../assets/kitchen/kitchen6.jpeg"),
  },
  {
    id: 30,
    category: "living",
    img: require("../../assets/living/living3.jpeg"),
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
    id: 35,
    category: "resto",
    img: require("../../assets/resto/resto3.jpeg"),
  },
  {
    id: 37,
    category: "resto",
    img: require("../../assets/resto/resto5.jpeg"),
  },
  {
    id: 20,
    category: "wardrobe",
    img: require("../../assets/wardrobe/wardrobe2.jpeg"),
  },
  {
    id: 23,
    category: "wardrobe",
    img: require("../../assets/wardrobe/wardrobe5.jpeg"),
  },
];

// ==================== //

function Cover() {
  const display = image;

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    fade: true,
    swipeToSlide: false,
    infinite: true,
    className: "center",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <div>
            "Great person brings joy to the people around, but great Interior
            Design brings convenience to everyone."
          </div>
          <div>-Ferchael-</div>
        </div>
        <div className={styles.row}>
          <ul className={styles.ul}>
            <Slider {...settings}>
              {display.length > 0
                ? display.map((item) => {
                    return (
                      <div>
                        <li key={item.id} className={styles.list}>
                          <img
                            src={item.img}
                            alt={item.category}
                            className={styles.image}
                          />
                        </li>
                      </div>
                    );
                  })
                : "Picture is not available"}
            </Slider>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Cover;
