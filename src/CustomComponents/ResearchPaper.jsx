import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import researchPaper from "../Assets/researchPaper.pdf";
import ProjectPageStyles from "../Classes/ProjectPageStyles";

function ResearchPaper() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const classes = ProjectPageStyles();
  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="inherit" style={{ marginTop: "1rem" }} className={classes.zoomOnHover}>
        View Research Paper
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg" height="100%">
        <DialogTitle>Analysis and Prediction Of Crime Hotspots</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <iframe src={researchPaper} width="100%" height="500px" title="Research Paper viewer" />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ResearchPaper;
