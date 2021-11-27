import React from "react";
import { useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const NavHomepage = () => {
    return (
      <div>
        <AppBar className={classes.nav}>
          <Toolbar className={classes.tool}>
            <Typography variant="p" className={classes.logo}>
              <Link to="/" className={classes.links}>
                FunDraw
              </Link>
            </Typography>
            <Typography variant="p" className={classes.contact}>
              <Link to="/" className={classes.links}>
                Contact
              </Link>
            </Typography>
            <Typography variant="p" className={classes.signin}>
              <Link to="/login" className={classes.links}>
                Sign in
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  };

  const NavLogin = () => {
    return (
      <div>
        <AppBar className={classes.nav}>
          <Toolbar className={classes.tool}>
            <Link to="/" className={classes.links}>
              <ArrowBack />
            </Link>
            <Typography variant="p" className={classes.logo}>
              <Link to="/" className={classes.links}>
                FunDraw
              </Link>
            </Typography>
            <Typography variant="p" className={classes.contact}>
              <Link to="/" className={classes.links}>
                Home
              </Link>
            </Typography>
            <Typography variant="p" className={classes.signin}>
              <Link to="/signup" className={classes.links}>
                Sign up
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
  const NavSignUp = () => {
    return (
      <div>
        <AppBar className={classes.nav}>
          <Toolbar className={classes.tool}>
            <Link to="/" className={classes.links}>
              <ArrowBack />
            </Link>
            <Typography variant="p" className={classes.logo}>
              <Link to="/" className={classes.links}>
                FunDraw
              </Link>
            </Typography>
            <Typography variant="p" className={classes.contact}>
              <Link to="/" className={classes.links}>
                Home
              </Link>
            </Typography>
            <Typography variant="p" className={classes.signin}>
              <Link to="/login" className={classes.links}>
                Sign in
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  };

  const NavDrawingPage = () => {
    return (
      <div>
        <AppBar className={classes.nav}>
          <Toolbar className={classes.tool}>
            <Link to="/" className={classes.links}>
              <ArrowBack />
            </Link>
            <Typography variant="p" className={classes.logo}>
              <Link to="/" className={classes.links}>
                FunDraw
              </Link>
            </Typography>

            <Typography variant="p" className={classes.profile}>
              <Link to="/profile" className={classes.links}>
                Update Profile
              </Link>
            </Typography>
            <Typography variant="p" className={classes.signin}>
              <Link to="/" className={classes.links}>
                Sign Out
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  };

  const NavProfileUpdate = () => {
    return (
      <div>
        <AppBar className={classes.nav}>
          <Toolbar className={classes.tool}>
            <Link to="/" className={classes.links}>
              <ArrowBack />
            </Link>
            <Typography variant="p" className={classes.logo}>
              <Link to="/" className={classes.links}>
                FunDraw
              </Link>
            </Typography>
            <Typography variant="p" className={classes.contact}>
              <Link to="/" className={classes.links}>
                Home
              </Link>
            </Typography>
            <Typography variant="p" className={classes.profile}>
              <Link to="/drawing" className={classes.links}>
                Drawing Board
              </Link>
            </Typography>
            <Typography variant="p" className={classes.signout}>
              <Link to="/" className={classes.links}>
                Sign Out
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  };

  const NavDrawingList = () => {
    return (
      <div>
        <AppBar className={classes.nav}>
          <Toolbar className={classes.tool}>
            <Link to="/" className={classes.links}>
              <ArrowBack />
            </Link>
            <Typography variant="p" className={classes.logo}>
              <Link to="/" className={classes.links}>
                FunDraw
              </Link>
            </Typography>
            <Typography variant="p" className={classes.item}>
              <Link to="/" className={classes.links}>
                Home
              </Link>
            </Typography>
            <Typography variant="p" className={classes.profile}>
              <Link to="/drawing" className={classes.links}>
                Drawing Board
              </Link>
            </Typography>
            <Typography variant="p" className={classes.action}>
              <Link to="/" className={classes.links}>
                Sign Out
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  };

  switch (location.pathname) {
    case "/":
      return <NavHomepage />;

    case "/login":
      return <NavLogin />;

    case "/signup":
      return <NavSignUp />;

    case "/drawing":
      return <NavDrawingPage />;

    case "/profile":
      return <NavProfileUpdate />;

    case "/user":
      return <NavDrawingList />;

    default:
  }
};

export default Navbar;
