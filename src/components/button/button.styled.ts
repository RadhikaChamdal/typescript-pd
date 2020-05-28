import styled from "styled-components";
import { Orange, lightOrange } from "../../constants/colors";

export const Button = styled.button`
   {
    color: black;
    background-color: ${Orange};
    font-family: "Roboto Mono", monospace;
    font-size: 1.2rem;
    padding: 8px 15px;
    border-radius: 8px;
    margin-right: -880px;
  }
  &:hover {
    background-color: ${lightOrange};
  }
`;
