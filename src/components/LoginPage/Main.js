import React from "react";
import { Typography, TextField, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box>
        <Typography variant="h6" color="white">
          Email
        </Typography>
        <TextField variant="outlined" required size="small" />
        <Typography variant="h6" color="white">
          Password
        </Typography>
        <TextField variant="outlined" required size="small" />
      </Box>
      <br />
      <Link to="/drawing" className={classes.button}>
        <Button variant="contained" color="secondary">
          Login
        </Button>
      </Link>
    </div>
  );
};

export default Main;
