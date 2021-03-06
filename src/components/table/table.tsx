import React from "react";
import { Table, TableRow, TableHeader, TableDescription } from "./table.styled";

function TableInfo() {
  return (
    <div>
      <Table>
        <TableRow>
          <TableHeader>CORE TYPES</TableHeader>

          <TableHeader>EXAMPLES</TableHeader>

          <TableHeader>DESCRIPTION</TableHeader>
        </TableRow>
        <tr>
          <TableDescription>STRINGS</TableDescription>
          <TableDescription>'Hi',"Hello",`Hello`</TableDescription>
          <TableDescription> All text values </TableDescription>
        </tr>
        <tr>
          <TableDescription>NUMBER</TableDescription>
          <TableDescription> 5, 10, 6.5 </TableDescription>
          <TableDescription>
            {" "}
            All numbers are the same, no difference between integers or float{" "}
          </TableDescription>
        </tr>
        <tr>
          <TableDescription>BOOLEAN</TableDescription>
          <TableDescription> True or False </TableDescription>
          <TableDescription> Only True and False </TableDescription>
        </tr>
        <tr>
          <TableDescription>OBJECTS</TableDescription>
          <TableDescription>{30} </TableDescription>
          <TableDescription>
            Objects are variables too. But can contain many values{" "}
          </TableDescription>
        </tr>
        <tr>
          <TableDescription>ARRAY</TableDescription>
          <TableDescription>[1,2,3]</TableDescription>
          <TableDescription>
            {" "}
            Group of elements, tend to be the same data type.
          </TableDescription>
        </tr>
        <tr>
          <TableDescription>TULUM</TableDescription>
          <TableDescription>[1,2]</TableDescription>
          <TableDescription>Fixed length array</TableDescription>
        </tr>
        <tr>
          <TableDescription>ENUMS</TableDescription>
          <TableDescription>Written as an object </TableDescription>
          <TableDescription>
            Define a set of named constants, either numerical or string based
          </TableDescription>
        </tr>
        <tr>
          <TableDescription>ANY </TableDescription>
          <TableDescription> * </TableDescription>
          <TableDescription>
            Avoid, but when used, can use for any value no specific type
            assignment
          </TableDescription>
        </tr>
      </Table>
    </div>
  );
}

export default TableInfo;
