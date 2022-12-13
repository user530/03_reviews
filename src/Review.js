import React, { useState } from "react";
import people from "./data";
import {
  FaChevronLeft,
  FaChevronCircleRight,
  FaQuoteRight,
  FaChevronRight,
} from "react-icons/fa";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    setIndex((curIndx) => Math.max(curIndx - 1, 0));
  };

  const nextPerson = () => {
    setIndex((curIndx) => Math.min(curIndx + 1, people.length - 1));
  };

  const randPerson = () => {
    setIndex((curIndx) => {
      let rndIndx = 0;
      do {
        rndIndx = Math.floor(Math.random() * people.length);
      } while (curIndx === rndIndx);

      return rndIndx;
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randPerson}>
        Surprise me
      </button>
    </article>
  );
}
