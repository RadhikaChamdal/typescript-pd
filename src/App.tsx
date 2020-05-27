import React from "react";
import { Router } from "@reach/router";
import Home from "./components/home/home";
import Arrays from "./components/arrays/arrays";
import Nav from "./components/navBar/navBar";

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Home path="/" />
        <Arrays path="Arrays" />
      </Router>
    </div>
  );
}

export default App;
