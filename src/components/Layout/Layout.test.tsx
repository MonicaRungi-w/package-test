import React from "react";
import { render } from "@testing-library/react";

import Layout from "./Layout";

describe("Layout", () => {
  test("renders the Layout component", () => {
    render(
      <Layout>
         <div>Hello World</div>
      </Layout>
    );
  });
});
