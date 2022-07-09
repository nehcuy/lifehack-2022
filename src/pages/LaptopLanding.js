import React from "react";
import Header from "../components/Header";
import { Button } from "@mui/material";

const LaptopLanding = () => {
  const onGoBack = () => {
    window.location.href = "/";
  };
  return (
    <>
      <Header />
      <h1>Enter this 4 digit code onto your phone</h1>
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
    </>
  );
};

export default LaptopLanding;
