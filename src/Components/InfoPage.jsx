import { Avatar, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import AppHeaderStyles from "../Classes/AppHeaderStyles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ayushi_pic from "../Assets/ayushi_pic.jpg";
import PDF from "./Resume";
function InfoPage() {
  const classes = AppHeaderStyles();
  return (
    <Stack className={classes.infoPageContainer}>
      <Stack gap="1rem">
        <Avatar sx={{ width: "16rem", height: "16rem" }}>
          <img src={ayushi_pic} style={{marginTop:"12rem"}}/>
        </Avatar>
        <Stack>
          <Typography fontWeight={600} fontSize="1.5rem" textAlign="left">
            Ayushi Lodha
          </Typography>
        </Stack>
        <Divider />
        <Stack alignItems="start" spacing="1rem">
          <Typography>ABOUT ME</Typography>
          <Typography textAlign="left">
            Hi, I'm Ayushi. I'm an Information Science Graduate and Software Engineer at Incture Technologies. Proficient in frontend web technologies like ReactJs and SAPUI5.
          </Typography>
          <PDF/>  
        </Stack>
        <Divider />
        <Stack direction="row" spacing="0.5rem">
          <a href="https://github.com/ayushilodha" target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ cursor: "pointer", color: "black" }} className={classes.zoomOnHover}/>
          </a>
          <a href="https://www.linkedin.com/in/ayushilodha/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon style={{ cursor: "pointer", color: "black" }} className={classes.zoomOnHover}/>
          </a>
          <a href="mailto:ayushilodha2108@gmail.com">
            <MailOutlineIcon style={{ cursor: "pointer", color: "black" }} className={classes.zoomOnHover}/>
          </a>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default InfoPage;
