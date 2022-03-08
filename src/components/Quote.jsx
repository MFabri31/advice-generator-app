import React from "react";
import "./quote.css";
import IconDice from "../images/icon-dice.svg";

const Quote = ({ advice, id, changeQuote }) => {
  return (
    <div className="quote">
      <h1 className="quote__title">
        advice <span>#{id}</span>
      </h1>
      <p>"{advice}"</p>
      <hr className="divider" />
      <button className="button" onClick={changeQuote}>
        <img src={IconDice} alt="icon dice" />
      </button>
    </div>
  );
};

export default Quote;
