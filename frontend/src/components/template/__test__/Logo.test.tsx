import { render, screen } from "@testing-library/react";
import Logo from "../Logo";
import { BrowserRouter } from "react-router-dom";

const MockLogo = () => {
  return (
    <BrowserRouter>
      <Logo />
    </BrowserRouter>
  );
};

describe("Logo verify components", () => {
  test("Should get role complementary", () => {
    render(<MockLogo />);
    const logoElement = screen.getByRole("complementary");
    expect(logoElement).toBeInTheDocument();
  });

  test("Should render img", () => {
    render(<MockLogo />);
    const logoElement = screen.getByRole("img");
    expect(logoElement).toBeInTheDocument();
  });
});
