import React from "react";
import { Box, Button, Typography } from "@mui/material";

const LaptopLanding = () => {
  // Generates 4 digit code for the phone
  let code = Math.floor(Math.random() * 10000);
  if (code < 1000) {
    code += 1000;
  }
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
          type="submit"
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

export default LaptopLanding;
