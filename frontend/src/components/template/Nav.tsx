import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav: React.FC = () => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <Link to="/">
          <i className="fa fa-home"></i> Home
        </Link>
        <Link to="/criar-comunicação">
          <i className="fa fa-users"></i> Criar comunicação
        </Link>
        <Link to="/comunicações">
          <i className="fa fa-users"></i> Comunicações
        </Link>
      </nav>
    </aside>
  );
};

export default Nav;
