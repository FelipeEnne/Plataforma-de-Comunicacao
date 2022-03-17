import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer verify texts", () => {
  test("Should render a name", () => {
    render(<Footer />);
    const footerElement = screen.getByText(/Felipe Enne Mendes Ribeiro/i);
    expect(footerElement).toBeInTheDocument();
  });
});

describe("Footer verify components", () => {
  test("Should render a footer", () => {
    render(<Footer />);
    const footerElement = document.querySelector("footer");
    expect(footerElement).toBeInTheDocument();
  });
});
