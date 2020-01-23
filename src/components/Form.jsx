import React, { useState } from "react";
import Lupe from "../images/lupe.svg";
import MicrophoneIcon from "../images/googlemic_color_24dp.png";
import { Link } from "react-router-dom";

import "../css/Form.css";

export const Form = () => {
  const [terms, setTerms] = useState("");

  const handleChange = e => {
    setTerms(e.target.value);
  };

  return (
    <div className="form-container">
      <form className="form-container">
        <div className="input-wrapper">
          <img src={Lupe} alt="Suchen" className="magnifying-glass" />
          <input
            className="input-style"
            type="text"
            value={terms}
            onChange={e => handleChange(e)}
          />
          <img
            src={MicrophoneIcon}
            alt="Sprachaufnahme"
            className="microphone"
          />
        </div>
        <div className="button-container">
          <Link to="/results">
            <input
              className="google-search"
              type="submit"
              value="Google Suche"
            />
          </Link>
          <Link to="/test">
            <input type="button" className="on-luck" value="Auf gut Glück!" />
          </Link>
        </div>
      </form>
    </div>
  );
};

// handleSubmit method to parse the input value as query param (onSubmit property of the submit google-search button/input)

// const handleSubmit = e => {
//   e.preventDefault();

//   if (terms !== "") {
//     var formatted = terms.split(" ").join("+");
//     window.location = "http://www.google.com/search?q=" + formatted;
//   }
// }; onSubmit={handleSubmit}
