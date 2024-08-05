import React from "react";
import { Link } from "react-router-dom";
import "../components/footer.css"; // 스타일링을 위한 CSS 파일
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <img className="footer-logo-img" src={logo} alt="Logo" />
    </footer>
  );
};

export default Footer;
