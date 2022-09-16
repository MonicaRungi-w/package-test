import React from "react";
import { render } from "@testing-library/react";

import CodeEditor from "./CodeEditor";

describe("CodeEditor", () => {
  test("renders the CodeEditor component", () => {
    render(<CodeEditor />);
  });
});
