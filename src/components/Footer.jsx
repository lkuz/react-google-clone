import React from "react";
import "../css/Footer.css";

export const Footer = () => (
  <div className="footer-container">
    <div className="top-footer">
      <div className="footer-country">Deutschland</div>
    </div>

    <div className="bottom-footer">
      <div className="left-footer-side">
        <a href="#" className="left-footer-link">
          Werbeprogramme
        </a>
        <a href="#" className="left-footer-link">
          Unternehmen
        </a>
        <a href="#" className="left-footer-link">
          Wie funktioniert die Google-Suche?
        </a>
      </div>

      <div className="right-footer-side">
        <a href="#" className="right-footer-link">
          Datenschutzerklärung
        </a>
        <a href="#" className="right-footer-link">
          Nutzungsbedingungen
        </a>
        <a href="#" className="right-footer-link">
          Einstellungen
        </a>
      </div>
    </div>
  </div>
);
