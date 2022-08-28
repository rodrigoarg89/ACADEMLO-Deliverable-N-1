import React from "react";

const QuoteBox = ({ changePhrase, randomColor, quote, author }) => {
  return (
    <div className="card" style={{ color: randomColor }}>
      <div className="title">
        <div>
          <i class="fa-solid fa-quote-left"></i>
        </div>
        <div>
          <h2>{quote}</h2>
        </div>
      </div>
      <div className="right">
        <h2>{author}</h2>
        <button
          onClick={changePhrase}
          style={{ background: randomColor, color: "white" }}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;

// style={ `color: ${randomColor}`}
// style={{color: randomColor}}
