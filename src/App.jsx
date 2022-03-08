import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";
import { getQuotes } from "./services/getQuotes";

const initialState = {};

const App = () => {
  const [quote, setQuotes] = useState(initialState);

  const { advice, id } = quote;

  useEffect(() => {
    getQuotes(setQuotes);
  }, []);

  const changeQuote = () => {
    getQuotes(setQuotes);
  };

  return (
    <>
      <Quote advice={advice} id={id} changeQuote={changeQuote} />
    </>
  );
};

export default App;
