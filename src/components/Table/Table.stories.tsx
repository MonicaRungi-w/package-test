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

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    const columns: ColumnType[] = [
      {
        id: "id",
        fieldName: "ID",
      },
      {
        id: "name",
        fieldName: "Name",
        Cell: (row: any, idx: number) => {
          return <h4 key={idx}>{row.name}</h4>;
        },
        sortable: true,
      },
      {
        id: "username",
        fieldName: "Username",
      },
      {
        id: "email",
        fieldName: "Email",
      },
      {
        id: "address",
        fieldName: "Address",
        Cell: (row: any, idx: number) => {
          return (
            <text key={idx}>
              {row.address.street + " - " + row.address.city}
            </text>
          );
        },
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
                style={{marginRight: "10px"}}
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
      },
    ];
    setColumns(columns);
  }, [data]);

  return <>{columns && <Table data={data} columns={columns} />}</>;
};

export const TableComponent = Template.bind({});
TableComponent.args = {};
