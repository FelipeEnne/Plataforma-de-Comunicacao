import { render, screen } from "@testing-library/react";
import Main from "../Main";

describe("Main verify props", () => {
  test("Should render same text passed into title prop", () => {
    render(<Main title="title test" />);
    const mainElement = screen.getByText(/title test/i);
    expect(mainElement).toBeInTheDocument();
  });

  test("Should render anything pass into Main", () => {
    render(<Main>test</Main>);
    const mainElement = screen.getByText(/test/i);
    expect(mainElement).toBeInTheDocument();
  });
});

describe("Main verify components", () => {
  test("Should render main", () => {
    render(<Main />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });
});
