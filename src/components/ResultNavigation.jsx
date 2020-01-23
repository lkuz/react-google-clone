import React from "react";

import "../css/Results.css";

export const ResultNavigation = () => {
  return (
    <div className="result-nav">
      <div className="result-nav-left">
        <ul>
          <li>Home</li>
        </ul>
      </div>
      <form className="results-nav-input-wrapper">
        <div className="results-input-wrapper">
          <input className="results-input-style" />
        </div>
      </form>
      <div className="result-nav-right-wrapper">
        <ul>
          <li>Menü</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  );
};
