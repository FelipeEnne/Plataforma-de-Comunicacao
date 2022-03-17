import { render, screen } from "@testing-library/react";
import Nav from "../Nav";
import { BrowserRouter } from "react-router-dom";

const MockNav = () => {
  return (
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
};

describe("Nav verify texts", () => {
  test("Should render text Home", () => {
    render(<MockNav />);
    const navElement = screen.getByText(/Home/i);
    expect(navElement).toBeInTheDocument();
  });
});

describe("Nav verify components", () => {
  test("Should get role complementary", () => {
    render(<MockNav />);
    const navElement = screen.getByRole("complementary");
    expect(navElement).toBeInTheDocument();
  });
});
