import styled from "styled-components";
import { lightGrey } from "../../constants/colors";

export const Table = styled.table`
  margin: 0 auto;
  border-collapse: seperate;
  border-spacing: 0 30px;
  table-layout: auto;
  width: 1020px;
`;

export const TableRow = styled.tr`
  color: #ffffff;
  font-size: 25px;
  text-align: center;



  }
`;

export const TableHeader = styled.th`
  padding-top: 5px;
  padding-bottom: 5px;
  text-size: 20px
  text-align: center;
  background-color: ${lightGrey};

  `;

export const TableDescription = styled.td`
  color: white;
  text-size: 30px;
  border-bottom: 1px solid #ddd;
  border-collapse: separate;
`;
