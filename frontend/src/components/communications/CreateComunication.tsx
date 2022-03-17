import React, { useState } from "react";
import { DateTime } from "luxon";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaCommentDots } from "react-icons/fa";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import AdapterLuxon from "@mui/lab/AdapterLuxon";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import Main from "../template/Main";
import { CommunicationType } from "../../utils/models";
import { baseUrl } from "../../utils/connection";

const initalCommunicationState: CommunicationType = {
  sender: "",
  receiver: "",
  communicationMessage: "",
  deliveryDate: DateTime.now().toString(),
  communicationFormat: [],
};

const ComunicationForm: React.FC = () => {
  const [communication, SetCommunication] = useState<CommunicationType>(
    initalCommunicationState
  );

  const handleMessageFormat = (s: string) => {
    let updateCommunicationFormat = communication.communicationFormat;
    if (!communication.communicationFormat.includes(s)) {
      updateCommunicationFormat.push(s);
      SetCommunication({
        ...communication,
        communicationFormat: updateCommunicationFormat,
      });
    } else {
      updateCommunicationFormat.splice(updateCommunicationFormat.indexOf(s), 1);
      SetCommunication({
        ...communication,
        communicationFormat: updateCommunicationFormat,
      });
    }
  };

  const clearInputs = () => {
    SetCommunication({ ...initalCommunicationState, communicationFormat: [] });
  };

  const sendComunication = () => {
    const method = "post";
    const updateCommunication = {
      ...communication,
      deliveryDate: DateTime.fromISO(communication.deliveryDate)
        .toUTC()
        .toString(),
    };
    axios[method](baseUrl, updateCommunication)
      .then(() => {
        clearInputs();
        toast.success("Comunicação salva com sucesso", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((e) => {
        toast.error(e.response.data, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div>
      <TextField
        id="sender"
        label="Remetente"
        variant="standard"
        sx={{ m: 1, width: "45%" }}
        value={communication.sender}
        onChange={(e) => {
          SetCommunication({
            ...communication,
            sender: e.target.value,
          });
        }}
      />
      <TextField
        id="receiver"
        label="Destinatário"
        variant="standard"
        sx={{ m: 1, width: "45%", mb: 2 }}
        value={communication.receiver}
        onChange={(e) => {
          SetCommunication({
            ...communication,
            receiver: e.target.value,
          });
        }}
      />
      <TextareaAutosize
        aria-label="communicationMessage"
        minRows={5}
        placeholder="Mensagem"
        style={{ width: "100%" }}
        value={communication.communicationMessage}
        onChange={(e) => {
          SetCommunication({
            ...communication,
            communicationMessage: e.target.value,
          });
        }}
      />

      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <DateTimePicker
          renderInput={(props: TextFieldProps) => (
            <TextField
              {...props}
              variant="standard"
              sx={{ width: "100%", mt: 2, mb: 2 }}
            />
          )}
          label="Data/Hora de envio"
          value={communication.deliveryDate}
          onChange={(date: DateTime | null) => {
            SetCommunication({
              ...communication,
              deliveryDate: date!.toString(),
            });
          }}
        />
      </LocalizationProvider>

      <FormGroup>
        <FormLabel component="legend">Mensagem a ser entregue por</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              checked={communication.communicationFormat.includes("email")}
              onChange={() => {
                handleMessageFormat("email");
              }}
            />
          }
          label="Email"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={communication.communicationFormat.includes("sms")}
              onChange={() => {
                handleMessageFormat("sms");
              }}
            />
          }
          label="SMS"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={communication.communicationFormat.includes("push")}
              onChange={() => {
                handleMessageFormat("push");
              }}
            />
          }
          label="Push"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={communication.communicationFormat.includes("whatsapp")}
              onChange={() => {
                handleMessageFormat("whatsapp");
              }}
            />
          }
          label="Whatsapp"
        />
      </FormGroup>

      <Divider sx={{ mb: 3 }} />
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <Button
            sx={{ mr: 2 }}
            variant="contained"
            onClick={() => {
              sendComunication();
            }}
          >
            Enviar
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              clearInputs();
            }}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

const CreateComunication: React.FC = () => {
  return (
    <Main
      icon={<FaCommentDots />}
      title="Criação de comunicação"
      subtitle="Plataforma de comunicação"
    >
      <ToastContainer />
      <ComunicationForm />
    </Main>
  );
};

export default CreateComunication;
