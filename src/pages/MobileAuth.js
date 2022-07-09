import React from "react";
import useSound from "use-sound";
import { Box, Button, Typography } from "@mui/material";
import url from "../utils/url";
import dingSound from "../utils/ding.mp3";

const getMoved = async () => {
  const response = await fetch(
    url +
      "/connect/moveStatus/" +
      JSON.parse(localStorage.getItem("phone")).phone._id,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};

// clearInterval(myInterval)  // If you ever want to stop the interval

const MobileAuth = () => {
  // Sound generator when movement is detected
  const [ding] = useSound(dingSound);

  // State for locked tablet
  const [isTabletSafe, setIsTabletSafe] = React.useState(true);

  var myInterval = setInterval(function () {
    getMoved().then((moved) => {
      if (moved) {
        setIsTabletSafe(false);
        // ding away
        ding();
      } else {
        // do not ding, continue repeating
      }
    });
  }, 5000);

  // Back button
  const onGoBack = () => {
    window.location.href = "/";
  };

  return (
    <>
      <Box sx={{ marginTop: "25vh" }}>
        <Typography sx={{ fontSize: "11pt", color: "black" }}>
          YOUR TABLET IS CURRENTLY
        </Typography>
        <Button
          disabled
          sx={{
            width: 200,
            height: 80,
            margin: "2%",
            "&.Mui-disabled": {
              backgroundColor: !isTabletSafe ? "#ff3838" : "#23c4b6",
            },
          }}
        >
          <Typography sx={{ fontSize: "18pt", color: "white" }}>
            {isTabletSafe ? "Safe" : "Unsafe"}
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

export default MobileAuth;
