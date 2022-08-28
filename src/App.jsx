import { useState } from "react";
import "./styles.css";
import quotes from "./quotes.json";
import QuoteBox from "./components/QuoteBox.jsx";

const colors = [
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FF9671",
  "#FFC75F",
  "#F9F871",
  "#5EC2B1",
  "#6BD1AA",
  "#84DE9E",
  "#A6E98F",
  "#CDF27E",
  "#F9F871",
  "#5EC2B9",
  "#67D1B2",
  "#7EDEA5",
  "#A1EA94",
  "#CAF381",
];

function App() {
  const randomPhrase = Math.floor(Math.random() * quotes.length);

  const [index, setIndex] = useState(randomPhrase);

  const changePhrase = () => {
    const randomPhrase = Math.floor(Math.random() * quotes.length);

    setIndex(randomPhrase);
  };

  const randomColor = Math.floor(Math.random() * colors.length);
  console.log(randomColor)



  document.body.style = ` background: ${colors[randomColor]}`;
  // document.h2.style =`color: ${colors[randomColor]}`
  // document.body.style=${color: {colors[randomColor]}};



  return (
    <div className="App">
      <QuoteBox
        quote={quotes[index].quote}
        author={quotes[index].author}

        changePhrase={changePhrase}
        randomColor={colors[randomColor]}


      />
    </div>
  );
}

export default App;

// document.body.style =`{ color: ${colors[randomColor]}` ,` background: ${colors[randomColor]}}`;