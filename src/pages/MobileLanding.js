import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import url from "../utils/url";

const MobileLanding = () => {
  const [loading, setLoading] = React.useState(false);
  const onSubmit = async () => {
    setLoading(true);
    const response = await fetch(url + "/connect/newPhone/1234", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json(); // data is the new phone object
    localStorage.setItem("phone", JSON.stringify(data));
    window.location.href = "/mobile-auth";
  };
  const onGoBack = () => {
    window.location.href = "/";
  };
  return (
    <>
      <Box sx={{ marginTop: "25vh" }}>
        <Typography
          sx={{
            fontSize: "12pt",
            color: "black",
            marginLeft: "10%",
            marginRight: "10%",
            marginBottom: "2%",
          }}
        >
          Please enter your authentication code to continue.
        </Typography>
        <TextField
          type="number"
          id="quantity"
          label="Code"
          inputProps={{ inputMode: "numeric" }}
        />
        <div>
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
          <Button
            disableElevation
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            onClick={onSubmit}
            sx={{
              backgroundColor: "#5596e6",
              color: "white",
              margin: "1vh",
            }}
          >
            {(!loading && "Submit") || <CircularProgress size={20} />}
          </Button>
        </div>
      </Box>
    </>
  );
};

export default MobileLanding;
