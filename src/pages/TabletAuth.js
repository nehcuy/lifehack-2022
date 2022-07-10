import React from "react";
import useSound from "use-sound";
import { Box, Button, Typography } from "@mui/material";
import dingSound from "../utils/ding.mp3";
import url from "../utils/url";

const setMove = async (movement) => {
  const laptop =
    JSON.parse(localStorage.getItem("laptop")).laptop ||
    JSON.parse(localStorage.getItem("laptop"));
  const newLaptop = {
    code: laptop.code,
    phone: null,
    moved: movement,
    _id: laptop._id,
  };
  console.log(newLaptop);
  const response = await fetch(url + "/connect/updateLaptop", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newLaptop),
  });
  const data = await response.json(); // updated laptop
  localStorage.setItem("laptop", JSON.stringify(data));
  console.log("New data", JSON.parse(localStorage.getItem("laptop")).moved);
};

const TabletAuth = () => {
  // Sound generator when movement is detected
  const [ding] = useSound(dingSound);

  // Back button
  const onGoBack = () => {
    window.location.href = "/";
  };

  const [isLocked, setIsLocked] = React.useState(false);

  const handleClick = () => {
    setIsLocked(!isLocked);
    if (isLocked) {
      motionDetection();
    }
  };

  // Check for device motion
  const motionDetection = () => {
    if (
      typeof DeviceMotionEvent !== "undefined" &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
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
                setMove(true);
              } else {
                setMove(false);
              }
            });
          }
        })
        .catch(console.error);
    }
  };

  return (
    <>
      <Box sx={{ marginTop: "20vh" }}>
        <Typography
          sx={{
            fontSize: "14pt",
            color: "black",
            marginLeft: "8%",
            marginRight: "8%",
          }}
        >
          Your tablet is currently {isLocked ? "" : "NOT"} tracking movement.
        </Typography>
        <Typography
          sx={{
            fontSize: "12pt",
            marginTop: "6%",
            marginLeft: "8%",
            marginRight: "8%",
          }}
        >
          Press the button below to toggle between modes.
        </Typography>
        <Button
          sx={{
            margin: "2%",
            width: 200,
            height: 80,
            backgroundColor: isLocked ? "#ff3838" : "#5596e6",
            "&:hover": {
              //you want this to be the same as the backgroundColor above
              backgroundColor: isLocked ? "#ff3838" : "#5596e6",
            },
          }}
          onClick={handleClick}
        >
          <Typography sx={{ fontSize: "18pt", color: "white" }}>
            {isLocked ? "Locked" : "Unlocked"}
          </Typography>
        </Button>
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

export default TabletAuth;
