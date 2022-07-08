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
        <tr>
          {columns.map((column) => {
            if (column.Cell && typeof column.Cell === "function") {
              return <td>{column.Cell(row, rowIdx)}</td>;
            } else if (row[column.id]) {
              return <td>{row[column.id]}</td>;
            } else {
              return <td></td>;
            }
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
