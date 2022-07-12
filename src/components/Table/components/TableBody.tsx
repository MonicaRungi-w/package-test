import React, { PropsWithChildren } from "react";
import { ColumnType } from "../types";

import "../Table.css";

export interface TableBodyProps extends PropsWithChildren {
  data: any[];
  columns: ColumnType[];
}

const TableBody = ({ data, columns }: TableBodyProps) => {
  return (
    <tbody className="table-body">
      {data?.map((row: any, rowIdx) => (
        <tr key={rowIdx}>
          {columns.map((column) => {
            if (column.show) {
              if (column.Cell && typeof column.Cell === "function") {
                return <td key={column.id}>{column.Cell(row, rowIdx)}</td>;
              } else if (row[column.id]) {
                return <td key={column.id}>{row[column.id]}</td>;
              } else {
                return <td key={column.id}></td>;
              }
            }
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
