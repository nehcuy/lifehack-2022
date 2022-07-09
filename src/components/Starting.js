import React from "react";
import { Box, Button } from "@mui/material";
import Header from "./Header";

const Starting = () => {
  const enterLaptop = () => {

  }
  const enterMobile = () => {

  }
  return (
    <>
      <Header />
      <Box sx={{ margin: "5%" }}>
        <Button
          onClick={enterMobile}
        >
          Phone
        </Button>
        <Button>Laptop</Button>
      </Box>
    </>
  );
}

export default Starting;