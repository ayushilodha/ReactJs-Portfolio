import { makeStyles } from "@mui/styles";
const ProjectPageStyles = makeStyles((theme) => ({
  projectsPageContainer: {
    padding: "1rem",
    width: "65%",
    height: "100%",
    backgroundColor: "white",
    color: "black",
    margin: "5rem 2rem 1rem auto",
  },
  projectCardsContainer: {
    display: "flex !important",
    flexWrap: "wrap !important",
    gap: "2%",
  },
  projectCardStyle: {
    textAlign: "left !important",
    padding: "1rem",
    border: "0.1rem solid #e6e6e6 !important",
    marginTop: "3rem !important",
    borderRadius: "0.6rem !important",
    width: "28%",
    backgroundColor: "#EAEDED !important",
  },
  techStackStyle: {
    width: "2rem !important",
    height: "2rem !important",
  },
  closeButton: {
    width: "1.5rem",
    height: "2rem",
    marginTop: "1rem !important",
  },
  dialogContainer: {
    padding: "0rem 1rem",
  },
  viewDetailsButtonStyle: {
    width: "9rem !important",
    backgroundColor: "#99A3A4 !important",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.5s ease-in-out",
      color: "black",
      backgroundColor: "#EAEDED !important"
    },
  },
  zoomOnHover: {
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.5s ease-in-out",
      color: "white",
      backgroundColor: "#99A3A4 !important"
    },
  },
}));

export default ProjectPageStyles;
