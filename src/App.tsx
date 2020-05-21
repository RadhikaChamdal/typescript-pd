import React from "react";
import { Router } from "@reach/router";
import Home from "./components/home/home";
import About from "./components/about/about";
import Nav from "./components/navBar/navBar";

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Home path="/" />
        <About path="about" />
      </Router>
    </div>
  );
}

export default App;
