import React from "react";
import { render } from "@testing-library/react";

import TimePicker from "./TimePicker";

describe("TimePicker", () => {
  test("renders the TimePicker component", () => {
    render(<TimePicker onTimeChange={() => {}} />);
  });
});
