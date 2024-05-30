import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, Button, IconButton } from "@mui/material";
import Resume from "../Assets/Resume.pdf";
import CloseIcon from "@mui/icons-material/Close";
import ProjectPageStyles from "../Classes/ProjectPageStyles";
function PDF() {
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
      <Button onClick={handleOpen} variant="contained" style={{ background: "#717D7E", color: "white" }} className={classes.zoomOnHover}>
        RESUME
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg" height="100%">
        <DialogTitle>Ayushi Lodha</DialogTitle>
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
          <iframe src={Resume} width="100%" height="500px" title="PDF viewer" />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PDF;
