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
    const comunications = await getCommunication();
    let comunicationElement = 0
    if(comunications.data.length > 0) {
      comunicationElement = (await screen.findAllByTestId(/comunication-/i)).length;
    } 
    expect(comunications.data.length).toBe(comunicationElement);
  });
});

describe("Communications verify interactions", () => {
  test("Delete a communication", async () => {
    render(<Communications />);

    let numberComunicationButtonElement = 0;
    const comunications = await getCommunication();

    if(comunications.data.length > 0) {
      const comunicationButtonElement = await screen.findAllByRole("button");
      numberComunicationButtonElement = comunicationButtonElement.length;
      fireEvent.click(comunicationButtonElement[0]);
    } 

    expect(numberComunicationButtonElement).toBe(comunications.data.length);
  });
});
