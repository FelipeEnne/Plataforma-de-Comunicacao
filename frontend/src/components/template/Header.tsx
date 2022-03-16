import React from "react";

import { HeaderProps } from "../../utils/models";

import "./Header.css";

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="header d-none d-sm-flex flex-column">
      <h1 className="mt-3">
        <span className="p-1">{props.icon}</span>
        {props.title}
      </h1>
      <p className="lead text-muted">{props.subtitle}</p>
    </header>
  );
};

export default Header;
