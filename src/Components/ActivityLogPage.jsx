import React from "react";
import ActivityLogPageStyles from "../Classes/ActivityLogPageStyles";
import { Stack, Typography } from "@mui/material";
import Timeline from "../CustomComponents/TimeLine";
function ActivityLogPage() {
  const classes = ActivityLogPageStyles();
  return (
    // <Stack className={classes.activityLogPageContainer}>
    //   <Typography>Hii all</Typography>
    // </Stack>
    <>
        <Timeline/>
    </>
  );

}

export default ActivityLogPage;
