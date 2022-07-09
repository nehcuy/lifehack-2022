import React from "react";
import { Box } from "@mui/material";

import Header from "../components/Header";

const MobileAuth = () => {
  const [locked, setLocked] = React.useState(false);
  return (
    <>
      <Header />
      <Box sx={{ margin: "5%" }}>
        {locked ? "Locked" : "Unlocked"}
      </Box>
    </>
  );
}

export default MobileAuth;