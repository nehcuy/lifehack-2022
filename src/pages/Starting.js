import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Header from "../components/Header";

const Starting = () => {
  const enterLaptop = () => {
    window.location.href = "/Laptop";
  };
  const enterMobile = () => {
    window.location.href = "/Mobile";
  };
  return (
    <>
      <Header />
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
            Laptop
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default Starting;
