import React from "react";
// import Nav from "../navBar/navBar";
import { StyledH1, StyledH2 } from "./home.styled";
import "../../App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledH1>Welcome to Typescript</StyledH1>
        <StyledH2> A guide to learn Typescript </StyledH2>
      </header>
    </div>
  );
}

export default Home;
