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
  return data;
};

const TabletLanding = () => {
  // Check for device motion
  if (
    typeof DeviceMotionEvent !== "undefined" &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    DeviceMotionEvent.requestPermission()
      .then((response) => {
        // (optional) Do something after API prompt dismissed.
        if (response === "granted") {
          window.addEventListener("devicemotion", (e) => {
            // do something for 'e' here.
            console.log(e);
            console.log("Motion detected!");
          });
        }
      })
      .catch(console.error);
  }
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
  return (
    <>
      <Box sx={{ marginTop: "20vh" }}>
        <Typography sx={{ fontSize: "16pt", color: "black" }}>
          Enter this 4 digit code onto your phone:
        </Typography>
        <Typography sx={{ fontSize: "44pt", color: "black" }}>
          {code}
        </Typography>
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
      </Box>
    </>
  );
};

export default TabletLanding;
