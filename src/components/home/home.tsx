import React, { FunctionComponent } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import { StyledH1, StyledH2 } from "./home.styled";
import { Button } from "../button/button.styled";
import TableInfo from "../table/table";
import "../../App.css";

export type HomePageProps = {} & RouteComponentProps;

const Home: FunctionComponent<HomePageProps> = () => (
  <div className="App">
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
      rel="stylesheet"
    ></link>
    <header className="App-header" style={{ marginTop: "2rem" }}>
      <StyledH1>Welcome to Typescript/Javascript</StyledH1>
      <StyledH2> A guide to learn the fundamentals of each language! </StyledH2>
    </header>
    <TableInfo></TableInfo>
    <Link to="Arrays">
      <Button> Click here to go to Arrays </Button>
    </Link>
  </div>
);

export default Home;
