import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../Button";

import Table from "./Table";
import { ColumnType } from "./types";

export default {
  title: "ReactComponentLibrary/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => {
  const [data, setData] = useState();
  const [columns, setColumns] = useState<ColumnType[]>();
  const [limit, setLimit] = useState(5);
  const [start, setStart] = useState(0);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [limit, start]);

  useEffect(() => {
    const columns: ColumnType[] = [
      {
        id: "id",
        fieldName: "ID",
        show: false,
      },
      {
        id: "title",
        fieldName: "Title",
        Cell: (row: any, idx: number) => {
          return <h4 key={idx}>{row.title}</h4>;
        },
        sortable: true,
        show: true,
      },
      {
        id: "albumId",
        fieldName: "Album ID",
        show: true,
      },
      {
        id: "url",
        fieldName: "URL",
        show: true,
      },
      {
        id: "edit",
        fieldName: "Actions",
        Cell: (row: any, idx: number) => {
          return (
            <div style={{ display: "flex" }}>
              <Button
                variant="primary"
                onClick={() => console.log("clicked", row.name)}
                style={{ marginRight: "10px" }}
              >
                edit
              </Button>
              <Button
                variant="primary"
                onClick={() => console.log("clicked", row.name)}
              >
                delete
              </Button>
            </div>
          );
        },
        show: true,
      },
    ];
    setColumns(columns);
  }, []);

  return (
    <>
      {columns && data && (
        <Table
          data={data}
          columns={columns}
          setColumns={setColumns}
          
          dataSize={30}
        />
      )}
    </>
  );
};

export const TableComponent = Template.bind({});
TableComponent.args = {};
