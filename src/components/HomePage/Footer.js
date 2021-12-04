import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Typography
        variant="h6"
        sx={{ backgroundColor: "black", color: "white", maxWidth: "100%" }}
      >
        Copyright © 2021 FunDraw | All Right Reserved
      </Typography>
    </div>
  );
};

export default Footer;
