import { ReactNode } from "react";

export type ColumnType = {
  id: string;
  fieldName: string;
  Cell?: (r: any, idx: number) => ReactNode;
  sortable?: boolean;
};

export type RowType = {};
