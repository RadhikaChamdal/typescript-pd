import React from "react";
import "./App.css";
import { StyledH1, StyledH2 } from "./components/home.styled";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledH1>Welcome to Typescript</StyledH1>
        <StyledH2> A guide to learn Typescript </StyledH2>
      </header>
    </div>
  );
}

export default App;
