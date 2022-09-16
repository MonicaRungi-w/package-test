import React from "react";
import { render } from "@testing-library/react";

import FileUploader from "./FileUploader";

describe("FileUploader", () => {
  test("renders the FileUploader component", () => {
    render(<FileUploader files={[]} setFiles={() => {}} />);
  });
});
