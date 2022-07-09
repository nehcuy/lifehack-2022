import React from "react";
import { Box } from "@mui/material";
import HeaderLogo from "../utils/images/HeaderLogo.png";

const Header = () => {
  return (
    <>
      <Box>
        <img src={HeaderLogo} alt="logo" style={{ width: "30%" }} />
      </Box>
    </>
  );
};

export default Header;
