import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Register } from ".";
describe("Register test", () => {
  describe("First test", () => {
    it("should render", () => {
      const { container } = render(<Register />);
      expect(true).toBeTruthy();
    });
  });

  describe("RegisterForm", () => {
    it("should render the basic fields", () => {
      const { getByTestId } = render(<Register />);
      fireEvent.input(getByTestId("firstName"), {
        target: {
          value: "test",
        },
      });
      expect(getByTestId("firstName").innerHTML).toEqual("");
    });

    it("should submit the form", () => {
      const { getByTestId } = render(<Register />);
      fireEvent.click(getByTestId("submit"));
    });
  });
});
