import React, { PropsWithChildren } from "react";
import { ColumnType } from "../types";

import "../Table.css";

export interface TableHeadProps extends PropsWithChildren {
  columns: ColumnType[];
}

const TableHead = ({ columns }: TableHeadProps) => {
  return (
    <thead className="table-head">
      <tr>
        {columns.map((c) => (
          <th>{c.fieldName}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
