import React from "react";

const Footer = () => (
  <div className="footer-container">
    <div className="top-footer">
      <div className="footer-country">Deutschland</div>
    </div>

    <div className="bottom-footer">
      <div className="left-footer-side">
        <a href="#" className="footer-link">
          Werbeprogramme
        </a>
        <a href="#" className="footer-link">
          Unternehmen
        </a>
        <a href="#" className="footer-link">
          Wie funktioniert die Google-Suche?
        </a>
      </div>

      <div className="right-footer-side">
        <a href="#" className="footer-link">
          Datenschutzerklärung
        </a>
        <a href="#" className="footer-link">
          Nutzungsbedingungen
        </a>
        <a href="#" className="footer-link">
          Einstellungen
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
