import { makeStyles } from "@mui/styles";
const AppHeaderStyles = makeStyles((theme) => ({
  AppHeaderClass: {
    padding: "0rem",
    position: "fixed !important",
    top: "-2px !important",
    left: "0rem !important",
    width: "100% !important",
    height: "100%",
    backgroundColor: "#EBEDEF",
    marginTop: "0rem !important",
    color: "black",
    overflowY: "auto",
    alignItems: "right",
  },
  infoPageContainer: {
    color: "black !important",
    position: "fixed",
    top: "5rem !important",
    left: "0px",
    margin: "0rem 1rem 1rem 2rem",
    padding: "1rem",
    backgroundColor: "#EBEDEF",
    width: "24%",
    height: "-webkit-fill-available !important",
    overflowY: "auto !important",
    // zIndex: "100 !important"
  },
  tabsStyle: {
    fontFamily: "Roboto !important",
    fontWeight: "600 !important",
    color: "grey !important",
  },
  tabsPosition: {
    position: "fixed",
    width: "100%",
    zIndex: "1",
  },
  zoomOnHover: {
    "&:hover": {
      transform: "scale(1.5)",
      transition: "transform 0.5s ease-in-out",
    },
  },
}));

export default AppHeaderStyles;
