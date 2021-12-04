import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useAuth0 } from "@auth0/auth0-react";

import useStyles from "./styles";
import ContactCard from "./Cards";

const Main = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();

  const contacts = [
    {
      id: 1,
      url: "../assets/image/tyler-nix-ZGa9d1a_4tA-unsplash.jpg",
      content: "Oluwaseun Alo",
    },
    {
      id: 1,
      url: "../assets/image/tyler-nix-ZGa9d1a_4tA-unsplash.jpg",
      content: "Oluwaseun Alo",
    },
  ];

  return (
    <div className={classes.mainpage}>
      <Grid container className={classes.griditem}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={6}
          sx={{ paddingTop: "7%", paddingLeft: "6%" }}
        >
          <Typography variant="h5">
            Explore your creativity with FunDraw
          </Typography>
          <Typography variant="h6" sx={{ color: "wheat", width: "400px" }}>
            We provide amazing and easy to use platform to create digital arts
          </Typography>
          <br />
          <Link to="/signup" className={classes.button}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => loginWithRedirect()}
            >
              Check out the Drawing Page
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=70OQN_MK5K8"
            playing="true"
            style={{ paddingRight: "15%" }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h6" className={classes.videodemo}>
            How the app works
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          fullWidth={true}
          sx={{ paddingTop: "5%", justifyContent: "center" }}
        >
          {/* <Typography variant="h6" sx={{ paddingLeft: "20%" }}>
            Meet the Engineers
          </Typography> */}
          {/* <ContactCard contacts={contacts} /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
