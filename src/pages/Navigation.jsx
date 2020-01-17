import React from "react";
import "../Navigation.css";

const Navigation = () => (
  <div className="nav-container">
    <ul className="nav">
      <div className="nav-left">
        {" "}
        <li className="list-item-left">
          {" "}
          <a href="#">Über Google</a>
        </li>
        <li className="list-item-left">
          {" "}
          <a href="#">Store</a>{" "}
        </li>
      </div>

      <div className="nav-right">
        {" "}
        <li className="list-item-right">
          {" "}
          <a href="#">Gmail</a>{" "}
        </li>
        <li className="list-item-right">
          {" "}
          <a href="#">Bilder</a>{" "}
        </li>
        <li className="list-item-right">
          {" "}
          <a href="#">Menü</a>{" "}
        </li>
        <li className="list-item-right">
          {" "}
          <a href="#">Profil</a>{" "}
        </li>
      </div>
    </ul>
  </div>
);

export default Navigation;
