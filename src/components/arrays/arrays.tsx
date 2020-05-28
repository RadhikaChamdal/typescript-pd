import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";
import { StyledH1, StyledH2 } from "../arrays/arrays.styled";

export type ArraysPageProps = {} & RouteComponentProps;

const Arrays: FunctionComponent<ArraysPageProps> = () => (
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
      rel="stylesheet"
    ></link>
    <header>
      <StyledH1> Arrays </StyledH1>
      <StyledH2>
        DEFINITION: An array is a data structure that contains a group of
        elements, typically these elements are all of the same data type.
      </StyledH2>{" "}
    </header>
  </div>
);

export default Arrays;
