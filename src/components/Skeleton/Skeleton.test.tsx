import React from "react";
import { render } from "@testing-library/react";

import Skeleton from "./Skeleton";

describe("Skeleton", () => {
  test("renders the Skeleton component", () => {
    render(<Skeleton />);
  });
});
