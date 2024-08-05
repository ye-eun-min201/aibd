import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // 스타일링을 위한 CSS 파일
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="header-logo">
          <Link to="/">
            <img className="header-logo-img" src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/introduction">Introduction</Link>
          </li>
          <li className="nav-item">
            <Link to="/chatbot">Chatbot</Link>
          </li>

          <li className="nav-item">
            <Link to="/analysis">Visualization</Link>
          </li>
          <li className="nav-item">
            <Link to="/success">Population</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
