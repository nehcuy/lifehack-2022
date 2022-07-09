import React from "react";
import { Box, Button, Typography } from "@mui/material";
import url from "../utils/url";

const getMoved = async () => {
  const response = await fetch(
    url + "/moveStatus/" + JSON.parse(localStorage.getItem("phone"))._id,
    async (req, res) => {
      try {
      } catch (e) {}
    }
  );
};

const MobileAuth = () => {
  const [locked, setLocked] = React.useState(false);
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
              backgroundColor: locked ? "#ff3838" : "#23c4b6",
            },
          }}
        >
          <Typography sx={{ fontSize: "18pt", color: "white" }}>
            {locked ? "Locked" : "Unlocked"}
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default MobileAuth;
