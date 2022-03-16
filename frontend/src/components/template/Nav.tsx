import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav: React.FC = () => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <Link to="/" className="text-center">
          <i className="fa fa-home"></i> Home
        </Link>
        <Link to="/create-comunication" className="text-center">
          <i className="fa fa-users"></i> Criar comunicação
        </Link>
        <Link to="/comunications" className="text-center">
          <i className="fa fa-users"></i> Comunicações
        </Link>
      </nav>
    </aside>
  );
};

export default Nav;
