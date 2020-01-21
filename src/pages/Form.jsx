import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../css/Form.css";

import MagniGlassIcon from "../images/magnifying-glass.svg";
import MicrophoneIcon from "../images/studio.svg";

import { Test } from "./Test.jsx";

export const Form = () => {
  const [terms, setTerms] = useState("");

  const handleChange = e => {
    setTerms(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (terms !== "") {
      var formatted = terms.split(" ").join("+");
      window.location = "http://www.google.com/search?q=" + formatted;
    }
  };

  return (
    <Router>
      <div className="form-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <img
              src={MagniGlassIcon}
              alt="Suchen"
              className="magnifying-glass"
            />
            <input type="text" value={terms} onChange={e => handleChange(e)} />
            <img
              src={MicrophoneIcon}
              alt="Sprachaufnahme"
              className="microphone"
            ></img>
          </div>
          <div className="button-container">
            <input
              type="button"
              className="google-search"
              type="submit"
              value="Google Suche"
            />

            <Link to="/test">
              <input type="button" className="on-luck" value="Auf gut Glück!" />
            </Link>
          </div>
          <Switch>
            <Route path="/test">
              <Test />
            </Route>
          </Switch>
        </form>
      </div>
    </Router>
  );
};
