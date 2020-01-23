import React from "react";
import "../css/Navigation.css";

export const Navigation = () => (
  <div className="nav-container">
    <ul className="nav">
      <div className="nav-left">
        {" "}
        <li className="list-item-left">
          {" "}
          <a href="#" className="nav-link">
            Über Google
          </a>
        </li>
        <li className="list-item-left">
          {" "}
          <a href="#" className="nav-link">
            Store
          </a>{" "}
        </li>
      </div>

      <div className="nav-right">
        {" "}
        <li className="list-item-right">
          {" "}
          <a href="#" className="nav-link">
            Gmail
          </a>{" "}
        </li>
        <li className="list-item-right">
          {" "}
          <a href="#" className="nav-link">
            Bilder
          </a>{" "}
        </li>
        <li className="list-item-right">
          {" "}
          <a href="#" className="nav-link">
            Menü
          </a>{" "}
        </li>
        <li className="list-item-right">
          {" "}
          <a href="#" className="nav-link">
            Profil
          </a>{" "}
        </li>
      </div>
    </ul>
  </div>
);
