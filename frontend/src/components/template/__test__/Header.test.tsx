import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { FaHome } from "react-icons/fa";

describe("Header verify props", () => {
  test("Should render same text passed into title prop", () => {
    render(<Header title="title test" />);
    const headerElement = screen.getByText(/title test/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("Should render same text passed into subtitle prop", () => {
    render(<Header subtitle="subtitle test" />);
    const headerElement = screen.getByText(/subtitle test/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("Should render svg if pass to icon prop", () => {
    render(<Header icon={<FaHome />} />);
    const headerElement = document.querySelector("svg");
    expect(headerElement).toBeInTheDocument();
  });

  test("Should not render svg if not pass to icon prop", () => {
    render(<Header />);
    const headerElement = document.querySelector("svg");
    expect(headerElement).not.toBeInTheDocument();
  });
});

describe("Header verify components", () => {
  test("Should get role heading", () => {
    render(<Header />);
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toBeInTheDocument();
  });

  test("Should contain a header", () => {
    render(<Header />);
    const headerElement = document.querySelector("header");
    expect(headerElement).toBeInTheDocument();
  });
});
