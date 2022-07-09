import React from "react";
import { Box, Button } from "@mui/material";
import Header from "./Header";

const Starting = () => {
  const enterLaptop = () => {
    window.location.href = "/Laptop";
  }
  const enterMobile = () => {
    window.location.href = "/Mobile";
  }
  return (
    <>
      <Header />
      <Box sx={{ margin: "5%" }}>

        <h1 sx ={{  }}>Phone User click here:</h1>
        <Button
          sx={{
            width: 200, height: 80
          }}
          onClick={enterMobile}>
          Phone
        </Button>

        <h1>Laptop User click here:</h1>
        <Button
          sx={{
            width: 200, height: 80
          }}
          onClick={enterLaptop}>
          Laptop
        </Button>

      </Box>
    </>
  );
}

export default Starting;