import React from "react";
import { render } from "@testing-library/react";

import Table from "./Table";

describe("Table", () => {
  test("renders the Table component", () => {
    render(
      <Table
        data={[]}
        columns={[]}
        setColumns={() => {}}
        limit={0}
        setLimit={() => {}}
        offset={0}
        setOffset={() => {}}
        dataSize={0}
      />
    );
  });
});
