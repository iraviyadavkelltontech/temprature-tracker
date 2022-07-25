import React from "react";
import { render } from "@testing-library/react";
import { TempTrackerComponent } from ".";
describe("TempTrackerComponent test", () => {
  describe("First test", () => {
    it("should render", () => {
      const { container } = render(<TempTrackerComponent />);

      expect(container).toMatchSnapshot();
    });
  });
});
