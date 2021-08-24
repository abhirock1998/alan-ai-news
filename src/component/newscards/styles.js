import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    padding: "0",
    display: "flex",
    flexWrap: "wrap",

    margin: 0,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    // width: "100%",
    height: "45vh",
    margin:10,
    padding: "10%",
    borderRadius: 10,
    color: "white",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
});
