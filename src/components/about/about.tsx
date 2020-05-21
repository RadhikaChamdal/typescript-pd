import React, { FunctionComponent } from "react";
import Nav from "../navBar/navBar";
import { RouteComponentProps } from "@reach/router";

export type AboutPageProps = {} & RouteComponentProps;

const About: FunctionComponent<AboutPageProps> = () => (
  <div>
    <Nav />
    About
  </div>
);

export default About;
