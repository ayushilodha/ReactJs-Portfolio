import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperiencePageStyles from "../Classes/ExperiencePageStyles";
import WorkIcon from "../Assets/WorkIcon.svg";
import WaitHourglassIcon from "../Assets/WaitHourglassIcon.svg";
import { Stack, Typography } from "@mui/material";

function ExperiencePage() {
  const classes = ExperiencePageStyles();
  return (
    <Stack>
      <Typography fontWeight={700} style={{ marginTop: "3rem", alignContent: "center", marginLeft: "31rem" }}>
        Work Experience
      </Typography>
      <VerticalTimeline className={classes.experiencePageContainer}>
        <VerticalTimelineElement className="vertical-timeline-element--work" date="Aug 2023 - Present" iconStyle={{ background: "white", color: "#fff" }} icon={<img src={WorkIcon} alt="Work Icon" />}>
          <h3 className="vertical-timeline-element-title">Associate Software Engineer</h3>
          <h4 className="vertical-timeline-element-title">Incture Technologies</h4>
          <h4 className="vertical-timeline-element-subtitle">Bangalore, Karnataka</h4>
          <p>ReactJs | React-Redux | SAP-BTP | GitHub</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2023 - Aug 2023"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={<img src={WorkIcon} alt="Work Icon" />}
        >
          <h3 className="vertical-timeline-element-title">Intern</h3>
          <h4 className="vertical-timeline-element-title">Incture Technologies</h4>
          <h4 className="vertical-timeline-element-subtitle">Bangalore, Karnataka</h4>
          <p>SAPUI5 | JavaScript | OData | SAP Fiori </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={<img src={WaitHourglassIcon} style={{ marginTop: "0.7rem" }} />}
        />
      </VerticalTimeline>
    </Stack>
  );
}

export default ExperiencePage;
