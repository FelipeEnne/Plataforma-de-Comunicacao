import React from "react";

import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <span>
        Desveloped with <i className="fa fa-heart text-danger"></i>
        <span> by</span> <strong>Felipe Enne Mendes Ribeiro</strong>
      </span>
    </footer>
  );
};

export default Footer;
