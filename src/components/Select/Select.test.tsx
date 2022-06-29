import React from "react";
import { render } from "@testing-library/react";

import Select from "./Select";

describe("Select", () => {
  test("renders the Select component", () => {
    render(
      <Select
        placeholder="test"
        values={[{ id: "1", label: "test" }]}
        selectedValue={{ id: "1", label: "test" }}
        onChange={() => {}}
      />
    );
  });
});
