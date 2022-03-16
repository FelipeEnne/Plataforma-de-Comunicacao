import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import axios from "axios";

import { FaCommentAlt, FaTrash } from "react-icons/fa";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Main from "../template/Main";
import { baseUrl } from "../../utils/connection";
import { CommunicationType } from "../../utils/models";

interface CardCommunicationssProps {
  communicationArray: CommunicationType[];
  removeCommunication: (id: number) => void;
}

const CardCommunications: React.FC<CardCommunicationssProps> = ({
  communicationArray,
  removeCommunication,
}) => {
  const dateFormated = (date: string) =>
    DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_MED);

  return (
    <Grid container spacing={2}>
      {communicationArray.map((communication) => {
        return (
          <Grid key={communication.id} item xs={12} md={6} pb={1}>
            <Card sx={{ minWidth: 275 }} variant="outlined">
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  Receiver: {communication.receiver}
                </Typography>
                <Typography sx={{ fontSize: 20 }} mb={1}>
                  {dateFormated(communication.deliveryDate)}
                </Typography>

                <Typography variant="body2" mb={1}>
                  {communication.communicationMessage}
                </Typography>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" mb={1}>
                  Status: {communication.communicationStatus}
                  <br />
                  Formats: {communication.communicationFormat.join(", ")}
                </Typography>
                <Typography textAlign="right">
                  <IconButton
                    color="error"
                    onClick={() => {
                      removeCommunication(communication.id!);
                    }}
                  >
                    <FaTrash />
                  </IconButton>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

const Communications: React.FC = () => {
  const [communicationArray, SetCommunicationArray] = useState<
    CommunicationType[]
  >([]);

  useEffect(() => {
    axios(baseUrl).then((resp) => {
      SetCommunicationArray(resp.data);
    });
  }, []);

  const removeCommunication = (id: number) => {
    axios.delete(`${baseUrl}/${id}`).then(() => {
      const communicationArrayUpadted = communicationArray.filter(
        (u) => u.id !== id
      );
      SetCommunicationArray(communicationArrayUpadted);
    });
  };

  return (
    <Main
      icon={<FaCommentAlt />}
      title="Comunicações"
      subtitle="Plataforma de comunicação"
    >
      <CardCommunications
        communicationArray={communicationArray}
        removeCommunication={removeCommunication}
      />
    </Main>
  );
};

export default Communications;
