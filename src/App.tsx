import React from "react";
import { Router } from "@reach/router";
import Home from "./components/home/home";
import Arrays from "./components/arrays/arrays";
import Challenges from "./components/challenges/challenges";
import Nav from "./components/navBar/navBar";

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Home path="/" />
        <Arrays path="Arrays" />
        <Challenges path="Challenges" />
      </Router>
    </div>
  );
}

export default App;
