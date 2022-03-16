import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "./components/template/Logo";
import Footer from "./components/template/Footer";
import Nav from "./components/template/Nav";

import Home from "./components/home/Home";

import "./App.css";

const PLRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Nav />
        <PLRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
