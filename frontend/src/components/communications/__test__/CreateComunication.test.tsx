import { render, screen, fireEvent } from "@testing-library/react";
import CreateComunication from "../CreateComunication";
import { DateTime } from "luxon";

describe("CreateComunication verify components", () => {
  test("Should render main", () => {
    render(<CreateComunication />);
    const createComunicationElement = screen.getByRole("main");
    expect(createComunicationElement).toBeInTheDocument();
  });
});

describe("Communications verify interactions", () => {
  test("should be able to type into input sender, reciver and message", () => {
    render(<CreateComunication />);

    const createComunicationElementSend = document.querySelector(
      "#sender"
    ) as HTMLInputElement;
    fireEvent.change(createComunicationElementSend, {
      target: { value: "test sender" },
    });

    const createComunicationElementReceiver = document.querySelector(
      "#receiver"
    ) as HTMLInputElement;
    fireEvent.change(createComunicationElementReceiver, {
      target: { value: "test receiver" },
    });

    const createComunicationElementMessage = screen.getByPlaceholderText(
      "Mensagem"
    ) as HTMLInputElement;
    fireEvent.change(createComunicationElementMessage, {
      target: { value: "test message" },
    });

    expect(createComunicationElementMessage.value).toBe("test message");
    expect(createComunicationElementReceiver.value).toBe("test receiver");
    expect(createComunicationElementSend.value).toBe("test sender");
  });

  // test("should be able to type into input date time", () => {
  //   render(<CreateComunication />);
  //   const createComunicationElement = document.querySelector(
  //     "#date-time-input"
  //   ) as HTMLInputElement;
  //   fireEvent.change(createComunicationElement, {
  //     target: { value: "3/17/2050 06:32 AM" },
  //   });
  //   expect(createComunicationElement.value).toBe("3/17/2050 06:32 AM");
  // });

  test("should be able to click checkbox", async () => {
    render(<CreateComunication />);
    const createComunicationElement = (await screen.findAllByRole(
      "checkbox"
    )) as HTMLInputElement[];
    fireEvent.click(createComunicationElement[0]);
    fireEvent.click(createComunicationElement[1]);
    fireEvent.click(createComunicationElement[2]);
    fireEvent.click(createComunicationElement[3]);
    expect(createComunicationElement[0].checked).toBe(true);
    expect(createComunicationElement[1].checked).toBe(true);
    expect(createComunicationElement[2].checked).toBe(true);
    expect(createComunicationElement[3].checked).toBe(true);
  });

  test("Test cancel button", async () => {
    render(<CreateComunication />);
    const buttonElement = screen.getByRole("button", { name: /Cancelar/i });

    const createComunicationElementSender = document.querySelector(
      "#sender"
    ) as HTMLInputElement;
    fireEvent.change(createComunicationElementSender, {
      target: { value: "test sender" },
    });

    const createComunicationElementReceiver = document.querySelector(
      "#receiver"
    ) as HTMLInputElement;
    fireEvent.change(createComunicationElementReceiver, {
      target: { value: "test receiver" },
    });

    const createComunicationElementMensagem = screen.getByPlaceholderText(
      "Mensagem"
    ) as HTMLInputElement;
    fireEvent.change(createComunicationElementMensagem, {
      target: { value: "test message" },
    });

    const createComunicationElementDataTime = document.querySelector(
      "#date-time-input"
    ) as HTMLInputElement;
    fireEvent.change(createComunicationElementDataTime, {
      target: { value: "3/17/2050 06:32 AM" },
    });

    const createComunicationElementCheck = (await screen.findAllByRole(
      "checkbox"
    )) as HTMLInputElement[];
    fireEvent.click(createComunicationElementCheck[0]);
    fireEvent.click(createComunicationElementCheck[1]);
    fireEvent.click(createComunicationElementCheck[2]);
    fireEvent.click(createComunicationElementCheck[3]);

    fireEvent.click(buttonElement);

    expect(createComunicationElementSender.value).toBe("");
    expect(createComunicationElementReceiver.value).toBe("");
    expect(createComunicationElementMensagem.value).toBe("");
    // expect(createComunicationElementDataTime.value.slice(0, -3)).toBe(
    //   DateTime.now().toFormat("L/dd/y T").toString()
    // );
    expect(createComunicationElementCheck[0].checked).toBe(false);
    expect(createComunicationElementCheck[1].checked).toBe(false);
    expect(createComunicationElementCheck[2].checked).toBe(false);
    expect(createComunicationElementCheck[3].checked).toBe(false);
  });

  test("Test send button", async () => {
    render(<CreateComunication />);
    const buttonElement = screen.getByRole("button", { name: /Enviar/i });

    const createComunicationElementSender = document.querySelector(
      "#sender"
    ) as HTMLInputElement;
    fireEvent.change(createComunicationElementSender, {
      target: { value: "test sender" },
    });

    const createComunicationElementReceiver = document.querySelector(
      "#receiver"
    ) as HTMLInputElement;
    fireEvent.change(createComunicationElementReceiver, {
      target: { value: "test receiver" },
    });

    const createComunicationElementMensagem = screen.getByPlaceholderText(
      "Mensagem"
    ) as HTMLInputElement;
    fireEvent.change(createComunicationElementMensagem, {
      target: { value: "test message" },
    });

    const createComunicationElementDataTime = document.querySelector(
      "#date-time-input"
    ) as HTMLInputElement;
    fireEvent.change(createComunicationElementDataTime, {
      target: { value: "3/17/2050 06:32 AM" },
    });

    const createComunicationElementCheck = (await screen.findAllByRole(
      "checkbox"
    )) as HTMLInputElement[];
    fireEvent.click(createComunicationElementCheck[0]);
    fireEvent.click(createComunicationElementCheck[1]);
    fireEvent.click(createComunicationElementCheck[2]);
    fireEvent.click(createComunicationElementCheck[3]);

    fireEvent.click(buttonElement);

    expect(createComunicationElementSender.value).toBe("test sender");
    expect(createComunicationElementReceiver.value).toBe("test receiver");
    expect(createComunicationElementMensagem.value).toBe("test message");
    // expect(createComunicationElementDataTime.value.slice(0, -3)).toBe(
    //   DateTime.now().toFormat("L/dd/y T").toString()
    // );
    expect(createComunicationElementCheck[0].checked).toBe(true);
    expect(createComunicationElementCheck[1].checked).toBe(true);
    expect(createComunicationElementCheck[2].checked).toBe(true);
    expect(createComunicationElementCheck[3].checked).toBe(true);
  });
});
