import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button Component", () => {
  it("should render button with the correct label", () => {
    const { getByText } = render(
      <Button label="Click Me" onClick={() => {}} />,
    );
    expect(getByText("Click Me")).toBeInTheDocument();
  });

  it("should call onClick when clicked", () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button label="Click Me" onClick={mockOnClick} />,
    );
    fireEvent.click(getByText("Click Me"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
