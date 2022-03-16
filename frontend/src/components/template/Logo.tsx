import React from "react";
import { Link } from "react-router-dom";

import "./Logo.css";
import logo from "../../assets/img/logo.jpg";

const Logo: React.FC = () => {
  return (
    <aside className="logo">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
    </aside>
  );
};

export default Logo;
