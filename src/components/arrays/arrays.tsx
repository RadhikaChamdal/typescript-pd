import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";
import { StyledH1 } from "../arrays/arrays.styled";

export type ArraysPageProps = {} & RouteComponentProps;

const Arrays: FunctionComponent<ArraysPageProps> = () => (
  <div>
    <header>
      <StyledH1> </StyledH1>
    </header>
  </div>
);

export default Arrays;
