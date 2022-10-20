import React from "react";
import { render } from "@testing-library/react";

import Slider from "./Slider";

describe("Slider", () => {
  test("renders the Slider component", () => {
    render(<Slider value={"0"} setValue={() => {}} />);
  });
});
