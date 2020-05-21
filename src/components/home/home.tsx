import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";
// import Nav from "../navBar/navBar";
import { StyledH1, StyledH2 } from "./home.styled";
import "../../App.css";

export type HomePageProps = {} & RouteComponentProps;

const Home: FunctionComponent<HomePageProps> = () => (
  <div className="App">
    <br />
    <br />
    <header className="App-header">
      <StyledH1>Welcome to Typescript</StyledH1>
      <StyledH2> A guide to learn Typescript </StyledH2>
    </header>
  </div>
);

export default Home;
