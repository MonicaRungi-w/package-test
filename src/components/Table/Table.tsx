import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { ColumnType } from "./types";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import Pagination from "../Pagination";
import Modal from "../Modal";
import Input from "../Input";
import Checkbox from "../Checkbox/Checkbox";

import "./Table.css";
import "../common.css";

export interface TableProps extends PropsWithChildren {
  data: any[];
  columns: ColumnType[];
  setColumns: (c: ColumnType[]) => void;
  limit?: number;
  setLimit?: (n: number) => void;
  offset?: number;
  setOffset?: (n: number) => void;
  dataSize: number;
}

const Table = ({
  data,
  columns,
  setColumns,
  limit,
  setLimit,
  offset,
  setOffset,
  dataSize,
  ...props
}: TableProps) => {
  const [currentItems, setCurrentItems] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [limitPerPage, setLimitPerPage] = useState(limit ? limit : 5);

  const content = () => (
    <>
      <div className="content-render">
        <div className="pagination">
          <div>Page Limit:</div>
          <Input
            type={"number"}
            placeholder="Page limit"
            value={limitPerPage.toString()}
            onChange={(e: string) => setLimitPerPage(Number(e))}
          />
        </div>
        <div>Columns:</div>
        {columns.map((c) => (
          <Checkbox
            key={c.id}
            label={c.fieldName}
            setChecked={() => handleColumnVisible(c.id)}
            checked={c.show ? c.show : false}
          />
        ))}
      </div>
    </>
  );

  const handleColumnVisible = (id: string) => {
    const columnsTmp = columns.map((c) => {
      if (c.id === id) {
        if (c.show) {
          c.show = !c.show;
        } else {
          c.show = true;
        }
      }
      return c;
    });
    setColumns(columnsTmp);
  };

  return (
    <>
      <div className="table-paginator">
        <table className="table-container">
          <TableHead columns={columns} openOptions={() => setOpen(true)} />
          <TableBody
            data={limit && offset ? data : currentItems}
            columns={columns}
          />
        </table>
        <div className="paginator">
          {data && (
            <Pagination
              data={data}
              itemsPerPage={limit ? limit : limitPerPage}
              dataSize={dataSize}
              offset={offset}
              setOffset={setOffset}
              setCurrent={limit && offset ? undefined : setCurrentItems}
            />
          )}
        </div>
      </div>
      <Modal
        title={"Table options"}
        content={content()}
        open={open}
        setOpen={setOpen}
        onSubmit={() => {
          if (limitPerPage > 0) {
            setOpen(false);
            if (setLimit) setLimit(limitPerPage);
          }
        }}
      />
    </>
  );
};

export default Table;
