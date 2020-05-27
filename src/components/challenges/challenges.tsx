import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";
import { StyledH1 } from "./challenges.styled";

export type ChallengesPageProps = {} & RouteComponentProps;

const Challenges: FunctionComponent<ChallengesPageProps> = () => (
  <div>
    <header>
      <StyledH1> Hello </StyledH1>
    </header>
  </div>
);

export default Challenges;
