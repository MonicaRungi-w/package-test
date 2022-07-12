import React, { PropsWithChildren } from "react";
import { ColumnType } from "../types";

import "../Table.css";
import { Option } from "../../../assets";

export interface TableHeadProps extends PropsWithChildren {
  columns: ColumnType[];
  openOptions: () => void;
}

const TableHead = ({ columns, openOptions }: TableHeadProps) => {
  return (
    <thead className="table-head">
      <tr className="options-row">
        <th colSpan={columns.length}>
          <img src={Option} className="option-logo" onClick={openOptions} />
        </th>
      </tr>
      <tr>{columns.map((c) => c.show && <th key={c.id}>{c.fieldName}</th>)}</tr>
    </thead>
  );
};

export default TableHead;
