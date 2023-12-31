import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const { palette } = useTheme();
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Box
        sx={{
          height: "70px",
          bgcolor: palette.secondary.midNightPurple,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box component="span" sx={{ color: "#ffffff", fontWeight: 700 }}>
          All rights reserved! {currentYear}.
        </Box>
      </Box>
    </>
  );
};

export default Footer;
