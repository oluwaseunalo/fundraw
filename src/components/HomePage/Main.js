import React from "react";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainpage}>
      <Grid container justifyContent="center" spacing={3} display="flex">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h5">
            Explore your creativity with FunDraw
          </Typography>
          <Typography variant="h6">
            We provide amazing and easy to use platform to create digital arts
          </Typography>
          <br />
          <Link to="/signup" className={classes.button}>
            <Button variant="contained" color="secondary">
              Check out the Drawing Page
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <Typography variant="h6">Video demo</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h6">How the app works</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} justifyContent="center">
          <Typography variant="h6">Meet the Engineers</Typography>
          <Card>
            <CardContent>
              <Typography variant="h6">
                {" "}
                loremipsumashjbjafshgdslhGFHGALSHDFGHJSDGFHAGSDHFGSFDHJBFNYDBYSDFLAGSDHGHHGFLjsljfhdgjhdfjghöfhjsk
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="https://www.linkedin.com/in/oluwaseunalo">
                Linkedin
              </Button>
            </CardActions>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6">
                loremipsumashjbjafshgdslhGFHGALSHDFGHJSDGFHAGSDHFGSFDHJBFNYDBYSDFLAGSDHGHHGFLjsljfhdgjhdfjghöfhjsk
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="https://www.linkedin.com/in/oluwaseunalo">
                Linkedin
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
