import { render, screen, fireEvent } from "@testing-library/react";
import Communications from "../Communications";
import axios from "axios";

import { baseUrl } from "../../../utils/connection";

const getCommunication = async () => {
  return await axios(baseUrl);
};

describe("Communications verify components", () => {
  test("Should render main", () => {
    render(<Communications />);
    const comunicationElement = screen.getByRole("main");
    expect(comunicationElement).toBeInTheDocument();
  });

  test("Should render cards elements", async () => {
    render(<Communications />);
    const comunicationElement = await screen.findAllByTestId(/comunication-/i);
    const comunications = await getCommunication();
    expect(comunicationElement.length).toBe(comunications.data.length);
  });
});

describe("Communications verify interactions", () => {
  test("Delete a communication", async () => {
    render(<Communications />);

    const comunicationButtonElement = await screen.findAllByRole("button");
    const numberOfComunications = comunicationButtonElement.length;
    fireEvent.click(comunicationButtonElement[0]);
    console.log(numberOfComunications);
    const comunications = await getCommunication();

    expect(numberOfComunications).toBe(comunications.data.length);
  });
});
