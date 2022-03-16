import React from "react";

import Main from "../template/Main";

const Home: React.FC = () => {
  return (
    <Main icon="fa fa-home" title="Home" subtitle="Plataforma de comunicação">
      <div className="display-4">Bem Vindo!</div>
      <hr />
      <p className="mb-0">
        Plataforma em que você pode agendar uma comunicação.
      </p>
    </Main>
  );
};

export default Home;
