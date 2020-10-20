import React from "react";
import styles from "./Galery.module.css";
// import pict from "../../assets/resto/resto5.jpeg";

// ==================== //

const image = [
  {
    id: 1,
    category: "kitchen",
    img: "../../assets/kitchen/kitchen1.jpeg",
  },
  {
    id: 2,
    category: "kitchen",
    img: "../../assets/kitchen/kitchen2.jpeg",
  },
  {
    id: 3,
    category: "kitchen",
    img: "../../assets/kitchen/kitchen3.jpeg",
  },
  {
    id: 4,
    category: "kitchen",
    img: "../../assets/kitchen/kitchen4.jpeg",
  },
  {
    id: 5,
    category: "kitchen",
    img: "../../assets/kitchen/kitchen5.jpeg",
  },
  {
    id: 6,
    category: "kitchen",
    img: "../../assets/kitchen/kitchen6.jpeg",
  },
  {
    id: 7,
    category: "kitchen",
    img: "../../assets/kitchen/kitchen7.mp4",
  },
  {
    id: 8,
    category: "kitchen",
    img: "../../assets/kitchen/kitchen8.mp4",
  },
  {
    id: 9,
    category: "kitchen",
    img: "../../assets/kitchen/kitchen9.mp4",
  },
  {
    id: 10,
    category: "kitchen",
    img: "../../assets/kitchen/kitchen10.jpeg",
  },
  {
    id: 11,
    category: "drobe",
    img: "../../assets/drobe/drobe1.jpeg",
  },
  {
    id: 12,
    category: "drobe",
    img: "../../assets/drobe/drobe2.jpeg",
  },
  {
    id: 13,
    category: "dining",
    img: "../../assets/dining/dining1.jpeg",
  },
  {
    id: 14,
    category: "bed",
    img: "../../assets/bed/bed1.jpeg",
  },
  {
    id: 15,
    category: "bed",
    img: "../../assets/bed/bed2.jpeg",
  },
  {
    id: 16,
    category: "bed",
    img: "../../assets/bed/bed3.jpeg",
  },
  {
    id: 17,
    category: "bed",
    img: "../../assets/bed/bed4.jpeg",
  },
  {
    id: 18,
    category: "bed",
    img: "../../assets/bed/bed5.jpeg",
  },
  {
    id: 19,
    category: "wardrobe",
    img: "../../assets/wardrobe/wardrobe1.jpeg",
  },
  {
    id: 20,
    category: "wardrobe",
    img: "../../assets/wardrobe/wardrobe2.jpeg",
  },
  {
    id: 21,
    category: "wardrobe",
    img: "../../assets/wardrobe/wardrobe3.jpeg",
  },
  {
    id: 22,
    category: "wardrobe",
    img: "../../assets/wardrobe/wardrobe4.jpeg",
  },
  {
    id: 23,
    category: "wardrobe",
    img: "../../assets/wardrobe/wardrobe5.jpeg",
  },
  {
    id: 24,
    category: "wardrobe",
    img: "../../assets/wardrobe/wardrobe6.jpeg",
  },
  {
    id: 25,
    category: "apartment",
    img: "../../assets/apart/apart1.jpeg",
  },
  {
    id: 26,
    category: "apartment",
    img: "../../assets/apart/apart2.jpeg",
  },
  {
    id: 27,
    category: "apartment",
    img: "../../assets/apart/apart3.jpeg",
  },
  {
    id: 28,
    category: "living",
    img: "../../assets/living/living1.jpeg",
  },
  {
    id: 29,
    category: "living",
    img: "../../assets/living/living2.jpeg",
  },
  {
    id: 30,
    category: "living",
    img: "../../assets/living/living3.jpeg",
  },
  {
    id: 31,
    category: "living",
    img: "../../assets/living/living4.jpeg",
  },
  {
    id: 32,
    category: "living",
    img: "../../assets/living/living5.jpeg",
  },
  {
    id: 33,
    category: "resto",
    img: "../../assets/resto/resto1.jpeg",
  },
  {
    id: 34,
    category: "resto",
    img: "../../assets/resto/resto2.jpeg",
  },
  {
    id: 35,
    category: "resto",
    img: "../../assets/resto/resto3.jpeg",
  },
  {
    id: 36,
    category: "resto",
    img: "../../assets/resto/resto4.jpeg",
  },
  {
    id: 37,
    category: "resto",
    img: "../../assets/resto/resto5.jpeg",
  },
];

// ==================== //

function Galery() {
  const display = image;
  console.log(display);

  return (
    <>
      <div>
        <ul>
          {display.length > 0
            ? display.map((item) => {
                return (
                  <li key={item.id}>
                    {/* <h1>{item.id}</h1> */}
                    <img src={item.img} alt={item.id} />
                    {/* <img src={pict} alt={item.category} /> */}
                  </li>
                );
              })
            : "Galery's empty"}
        </ul>
      </div>
    </>
  );
}

export default Galery;
