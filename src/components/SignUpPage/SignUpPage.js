import React from "react";
import { Typography, TextField, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const SignUpPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display="block" className={classes.box}>
        <Typography variant="h6" color="white">
          First Name
        </Typography>
        <TextField
          variant="outlined"
          required
          size="small"
          className={classes.textfield}
        />

        <Typography variant="h6" color="white">
          Last Name
        </Typography>
        <TextField
          variant="outlined"
          required
          size="small"
          className={classes.textfield}
        />

        <Typography variant="h6" color="white">
          Email
        </Typography>
        <TextField
          variant="outlined"
          required
          size="small"
          className={classes.textfield}
        />

        <Typography variant="h6" color="white">
          Password
        </Typography>
        <TextField
          variant="outlined"
          required
          size="small"
          className={classes.textfield}
        />
        <br />
        <Link to="/drawing" className={classes.button}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.profile}
          >
            Create Account
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default SignUpPage;
