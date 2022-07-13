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
}

const Table = ({ data, columns, setColumns, ...props }: TableProps) => {
  const [currentItems, setCurrentItems] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [paginator, setPaginator] = useState(5);

  const content = () => (
    <>
      <div className="content-render">
        <div className="pagination">
          <div>Page Limit:</div>
          <Input
            type={"number"}
            placeholder="Page limit"
            value={paginator.toString()}
            onChange={(e: string) => setPaginator(Number(e))}
          />
        </div>
        <div>Columns:</div>
        {columns.map((c) => (
          <Checkbox
            key={c.id}
            label={c.fieldName}
            onClick={() => handleColumnVisible(c.id)}
            checked={c.show}
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
          <TableBody data={currentItems} columns={columns} />
        </table>
        <div className="paginator">
          {data && (
            <Pagination
              data={data}
              setCurrent={setCurrentItems}
              itemsPerPage={paginator}
            />
          )}
        </div>
      </div>
      <Modal
        title={"Table options"}
        content={content()}
        open={open}
        setOpen={setOpen}
        onSubmit={() => setOpen(false)}
      />
    </>
  );
};

export default Table;
