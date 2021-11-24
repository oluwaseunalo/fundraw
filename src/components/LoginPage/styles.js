import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: 60,

    background:
      "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",

    width: "100vw",
    height: "100vh",

    justifyContent: "center",

    alignItems: "center",
  },

  button: {
    textDecoration: "none",
    color: "white",
  },
});

export default useStyles;
