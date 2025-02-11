import { useState } from "react";
export default function Card(promps) {
  const { value } = promps;

  const  template = value.map((item,index) => (
    <div className="cards" key={index}>
      <img className="cardImg" src={item.image} alt="" />
      <div className="cardContainer">
        <p className="cardDesc">
          * {item.rating} {item.count} {item.country}
        </p>
        <h3 className="cardTitle">{item.title}</h3>
        <p className="cardPrice">From {item.price}$ / person</p>
      </div>
    </div>
  ))

  return (
    <div>
      {template}
    </div>
  );
}
