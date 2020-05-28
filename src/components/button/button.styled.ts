import styled from "styled-components";
import { Orange, darkOrange, White } from "../../constants/colors";

export const Button = styled.button`
   {
    color: ${White};
    background-color: ${Orange};
    font-size: 1rem;
    padding: 8px 15px;
    margin-right: -780px;
    border-radius: 8px;
    border-color: ${Orange};
    font-family: "Roboto";
  }
  &:hover {
    background-color: ${darkOrange};
  }
`;
