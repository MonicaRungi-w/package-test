import React, { PropsWithChildren, useState } from "react";
import { ColumnType } from "./types";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";

import "./Table.css";
import "../common.css";

export interface TableProps extends PropsWithChildren {
  data: any;
  columns: ColumnType[];
}

const Table = ({ data, columns, ...props }: TableProps) => {
  return (
    <table className="table-container">
      <TableHead columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
