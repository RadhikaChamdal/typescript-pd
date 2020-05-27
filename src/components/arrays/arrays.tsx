import React, { FunctionComponent } from "react";
import Nav from "../navBar/navBar";
import { RouteComponentProps } from "@reach/router";

export type ArraysPageProps = {} & RouteComponentProps;

const Arrays: FunctionComponent<ArraysPageProps> = () => (
  <div>
    <Nav />
    About
  </div>
);

export default Arrays;
