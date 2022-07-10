import React from "react";
import useSound from "use-sound";
import { Box, Button, Typography } from "@mui/material";
import dingSound from "../utils/ding.mp3";
import url from "../utils/url";

const setMove = async () => {
  const laptop = JSON.parse(localStorage.getItem("laptop")).laptop;
  const newLaptop = {
    code: laptop.code,
    phone: null,
    moved: true,
    _id: laptop._id,
  };
  console.log(newLaptop);
  const response = await fetch(url + "/connect/updateLaptop", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: newLaptop,
  });
  const data = await response.json(); //updated laptop
  localStorage.setItem("laptop", JSON.stringify(data));
  console.log(
    "New data",
    JSON.parse(localStorage.getItem("laptop")).laptop.moved
  );
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
    setMove(); // Temporary
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
                setMove();
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
        <Typography sx={{ fontSize: "14pt", color: "black" }}>
          Your tablet is currently {isLocked ? "" : "NOT"} tracking movement.
        </Typography>
        <Button
          sx={{
            margin: "2%",
            width: 200,
            height: 80,
            bgcolor: isLocked ? "#ff3838" : "#5596e6",
            "&:hover": {
              bgcolor: isLocked ? "#5596e6" : "#ff3838",
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
