import React from "react";
import { render } from "@testing-library/react";

import DatePicker from "./DatePicker";

describe("DatePicker", () => {
  test("renders the DatePicker component", () => {
    render(<DatePicker />);
  });
});
