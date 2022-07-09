import React from "react";
import { Box, Button, Typography } from "@mui/material";

const LockButton = () => {
  const [isLocked, setIsLocked] = React.useState(false);

  const handleClick = () => {
    setIsLocked(!isLocked);
  };

  return (
    <Box sx={{ margin: "5%" }}>
      <Button
        sx={{
          width: 200,
          height: 80,
          bgcolor: isLocked ? "#ff3838" : "#5596e6",
          "&:hover": {
              bgcolor: isLocked ? "#5596e6" : "#ff3838",
          }
        }}
        onClick={handleClick}
      >
        <Typography sx={{ fontSize: "18pt", color: "white" }}>
          {isLocked ? "Locked" : "Unlocked"}
        </Typography>
      </Button>
    </Box>
  );
};

export default LockButton;
