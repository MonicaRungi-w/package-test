import React from "react";
import { render } from "@testing-library/react";

import Fab from "./Fab";

describe("Fab", () => {
  test("renders the Fab component", () => {
    render(<Fab actions={[{ label: "Test", icon: "", onClick: () => {} }]} />);
  });
});
