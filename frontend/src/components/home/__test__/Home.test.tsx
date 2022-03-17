import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe("Home verify texts", () => {
  test("Should render a text Bem Vindo!", () => {
    render(<Home />);
    const homeElement = screen.getByText(/Bem Vindo!/i);
    expect(homeElement).toBeInTheDocument();
  });

  test("Should render a text Plataforma em que você pode agendar uma comunicação.", () => {
    render(<Home />);
    const homeElement = screen.getByText(
      /Plataforma em que você pode agendar uma comunicação./i
    );
    expect(homeElement).toBeInTheDocument();
  });
});

describe("Home verify components", () => {
  test("Should render main", () => {
    render(<Home />);
    const homeElement = screen.getByRole("main");
    expect(homeElement).toBeInTheDocument();
  });
});
