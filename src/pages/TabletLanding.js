import React from "react";
import useSound from "use-sound";
import { Box, Button, Typography } from "@mui/material";
import url from "../utils/url";
import dingSound from "../utils/ding.mp3";

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

const setMove = async () => {
  const laptop = JSON.parse(localStorage.getItem("laptop"));
  laptop.laptop.moved = true;
  console.log(laptop.laptop.moved);
  const response = await fetch(url + "/connect/updateLaptop", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: laptop,
  });
  const data = await response.json(); //updated laptop
  localStorage.setItem("laptop", JSON.stringify(data));
};

const TabletLanding = () => {
  localStorage.clear();
  // Sound generator when movement is detected
  const [ding] = useSound(dingSound);

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

  // State for code generation
  const [generateCode, setGenerateCode] = React.useState(false);

  // Check for device motion
  const motionDetection = () => {
    setGenerateCode(true);
    if (
      typeof DeviceMotionEvent !== "undefined" &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      setGenerateCode(true);
      DeviceMotionEvent.requestPermission()
        .then((response) => {
          // (optional) Do something after API prompt dismissed.
          if (response === "granted") {
            window.addEventListener("devicemotion", (e) => {
              const acc = Math.sqrt(
                Math.pow(e.acceleration.x, 2) +
                  Math.pow(e.acceleration.y, 2) +
                  Math.pow(e.acceleration.z, 2)
              );
              if (acc > 6) {
                // console.log(
                //   "Rapid movement detected at " + new Date().toTimeString()
                // );
                ding();
                setMove();
              }
            });
          }
        })
        .catch(console.error);
    }
  };

  if (generateCode) {
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
  } else {
    return (
      <>
        <Box sx={{ marginTop: "20vh" }}>
          <Typography sx={{ fontSize: "16pt", color: "black" }}>
            Click to generate authentication code.
          </Typography>
          <Button
            disableElevation
            variant="contained"
            color="primary"
            onClick={motionDetection}
            sx={{
              width: 200,
              height: 80,
              backgroundColor: "#5596e6",
              color: "white",
              margin: "1vh",
            }}
          >
            Generate Code
          </Button>
          <div>
            <Button
              disableElevation
              variant="contained"
              color="primary"
              onClick={onGoBack}
              sx={{
                width: 100,
                height: 40,
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
  }
};

export default TabletLanding;
