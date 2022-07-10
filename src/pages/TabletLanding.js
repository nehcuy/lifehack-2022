import React from "react";
import { Box, Button, Typography } from "@mui/material";
import url from "../utils/url";

const makeCode = async (code) => {
  const response = await fetch(url + "/connect/newLaptop", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  });
  if (!response.ok) {
    const error = new Error(`An error occured: ${response.status}`);
    error.code = response.status;
    throw Error;
  }
  const data = await response.json();
  localStorage.setItem("laptop", JSON.stringify(data));
  return data;
};

const TabletLanding = () => {
  // Generates 4 digit code for the phone
  let code = Math.floor(Math.random() * 10000);
  if (code < 1000) {
    code += 1000; // For floats below 0.1
  }
  makeCode(code);

  // Back button
  const onGoBack = () => {
    window.location.href = "/";
  };

  const onGoNext = () => {
    window.location.href = "/tablet-auth";
  };

  // State for code generation
  const [generateCode, setGenerateCode] = React.useState(false);

  return (
    <>
      <Box sx={{ marginTop: "20vh" }}>
        <Typography sx={{ fontSize: "16pt", color: "black" }}>
          Enter this 4 digit code onto your phone:
        </Typography>
        <Typography sx={{ fontSize: "44pt", color: "black" }}>
          {code}
        </Typography>
        <div>
          <Button
            disableElevation
            variant="contained"
            color="primary"
            onClick={onGoNext}
            sx={{
              width: 100,
              height: 40,
              backgroundColor: "#5596e6",
              color: "white",
              margin: "1vh",
            }}
          >
            Next
          </Button>
        </div>
        <div>
          <Button
            disableElevation
            variant="contained"
            color="primary"
            onClick={onGoBack}
            sx={{
              backgroundColor: "#8c9ba5",
              color: "white",
              margin: "1vh",
            }}
          >
            Back
          </Button>
        </div>
      </Box>
    </>
  );
};

export default TabletLanding;
