import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";
import { StyledH1, StyledH2 } from "./home.styled";
import TableInfo from "../table/table";
import "../../App.css";

export type HomePageProps = {} & RouteComponentProps;

const Home: FunctionComponent<HomePageProps> = () => (
  <div className="App">
    <header className="App-header" style={{ marginTop: "2rem" }}>
      <StyledH1>Welcome to Typescript/Javascript</StyledH1>
      <StyledH2> A guide to learn the fundamentals of each language! </StyledH2>
    </header>
    <TableInfo></TableInfo>
  </div>
);

export default Home;
