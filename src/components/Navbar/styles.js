import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  nav: {
    background:
      "linear-gradient(90deg, rgba(50,22,83,1) 0%, rgba(61,59,65,1) 50%, rgba(29,18,71,1) 96%)",
    flexGrow: 1,
  },

  signin: {
    flexGrow: 1,
    padding: "0 15px",
  },
  contact: {
    marginLeft: "spacing(2)",
  },
  logo: {
    flexGrow: 3,
    padding: "0 140px",
  },
  links: {
    textDecoration: "none",
    color: "white",
  },
  profile: {
    padding: "0 15px",
  },

  signout: {
    padding: "0 15px",
  },
});

export default useStyles;
