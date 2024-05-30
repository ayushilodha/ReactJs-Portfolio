import { makeStyles } from "@mui/styles";
import { color } from "@mui/system";
const AboutPageStyles = makeStyles((theme) => ({
  aboutPageContainer: {
    padding: "1rem",
    width: "65%",
    height: "100%",
    backgroundColor: "white",
    marginTop: "4rem !important",
    color: "black",
    margin: "0rem 2rem 1rem auto"
  },
  skillIconsStyle:{
    width: "5rem !important",
    height: "5rem !important"
  },
  zoomOnHover: {
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.3s ease-in-out",
    },
  },
}));

export default AboutPageStyles;
