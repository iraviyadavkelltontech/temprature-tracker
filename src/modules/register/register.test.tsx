import React from "react";
import { render } from "@testing-library/react";
import { Register } from ".";
describe("Register test", () => {
  describe("First test", () => {
    it("should render", () => {
      const { container } = render(<Register />);

      expect(container).toMatchSnapshot();
    });
  });
});
