import { Avatar, Button, Divider, Icon, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import HomePageStyles from "../Classes/HomePageStyles";

function HomePage() {
  const classes = HomePageStyles();

  return (
    <>
      <Stack className={classes.homePageContainer}>
        <Stack textAlign="left" spacing="2rem" margin="1rem 0rem 2rem 3rem">
          <Typography fontWeight={700} fontSize="2rem" color="#515A5A">
            ABOUT THIS SITE
          </Typography>
          <Typography fontWeight={300} fontFamily="inherit">
            A STATISTICALLY-GENERATED, REACTIVE, BEAUTIFUL, RESPONSIVE, AND MODERN JAVASCRIPT APP.
          </Typography>
        </Stack>
        <Divider />
        <Stack textAlign="left" spacing="2rem" margin="2rem 0rem 4rem 3rem">
          <Typography color="#909497">Welcome to my website. Please feel free to read more about me, or you can check out my resume, projects or contact me.</Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default HomePage;
