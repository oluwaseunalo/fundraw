import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: 60,

    background:
      "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",

    width: "100vw",
    height: "100vh",
    position: "relative",
  },

  button: {
    textDecoration: "none",
  },

  box: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 380,
    bottom: 370,
  },

  textfield: {
    backgroundColor: "white",
    borderRadius: "5px",
    width: 450,
  },

  profile: {
    width: 450,
    position: "absolute",
    top: 20,
  },
});

export default useStyles;
