import React from "react";
import { render } from "@testing-library/react";
import { AnagramComponent } from ".";
describe("AnagramComponent test", () => {
  describe("First test", () => {
    it("should render", () => {
      const { container } = render(<AnagramComponent />);

      expect(container).toMatchSnapshot();
    });
  });
});
