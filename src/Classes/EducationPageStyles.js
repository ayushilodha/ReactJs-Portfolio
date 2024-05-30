import { makeStyles } from "@mui/styles";
const EducationPageStyles = makeStyles((theme) => ({
  educationPageContainer: {
    padding: "1rem",
    width: "65%",
    height: "100%",
    backgroundColor: "white",
    marginTop: "4rem !important",
    color: "black",
    margin: "0rem 2.5rem 1rem auto"
  },
  zoomOnHover: {
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.3s ease-in-out",
    },
  },
  colorOnHover: {
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      
    },
  },
}));

export default EducationPageStyles;
