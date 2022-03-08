export const getQuotes = (setQuotes) => {
  return fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((response) => {
      setQuotes(response.slip);
    });
};
