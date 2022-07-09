import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Starting = () => {
  const enterLaptop = () => {
    window.location.href = "/tablet";
  };
  const enterMobile = () => {
    window.location.href = "/mobile";
  };
  return (
    <>
      <Box sx={{ marginTop: "25vh" }}>
        <Typography sx={{ fontSize: "14pt", marginBottom:"1%" }}>
          What device are you on?
        </Typography>
        <Button
          onClick={enterMobile}
          sx={{
            bgcolor: "#5596e6",
            width: 200,
            height: 80,
            margin: "2%",
          }}
        >
          <Typography sx={{ fontSize: "18pt", color: "white" }}>
            Phone
          </Typography>
        </Button>

        <Button
          onClick={enterLaptop}
          sx={{
            bgcolor: "#5596e6",
            width: 200,
            height: 80,
            margin: "2%",
          }}
        >
          <Typography sx={{ fontSize: "18pt", color: "white" }}>
            Tablet
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default Starting;
