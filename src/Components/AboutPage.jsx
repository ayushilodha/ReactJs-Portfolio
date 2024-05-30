import { Avatar, Divider, Tooltip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import AboutPageStyles from "../Classes/AboutPageStyles";
import html5 from "../Assets/html5.png";
import css from "../Assets/css.png";
import javascript from "../Assets/javascript.png";
import react from "../Assets/react.png";
import sapui5 from "../Assets/sapui5.png";
import gfg from "../Assets/gfg.png";
import hackerrank from "../Assets/hackerrank.png";
import leetcode from "../Assets/leetcode.png";
import cLanguage from "../Assets/cLanguage.png";
import cplusplus from "../Assets/cplusplus.png";
import python from "../Assets/python.png";
import java from "../Assets/java.png";
import mySql from "../Assets/mySql.png";
import bas from "../Assets/bas.png";
import vscode from "../Assets/vscode.png";
import pycharm from "../Assets/pycharm.png";
import git from "../Assets/git.png";
import redux from "../Assets/redux.png";

function AboutPage() {
  const classes = AboutPageStyles();
  return (
    <Stack className={classes.aboutPageContainer}>
      <Stack textAlign="left" spacing="2rem" margin="2rem 0rem 2rem 3rem">
        <Typography fontWeight={700} fontSize="2rem" color="#515A5A">
          ABOUT ME
        </Typography>
      </Stack>
      <Divider />
      <Stack textAlign="left" spacing="1rem" margin="2rem 0rem 1rem 3rem">
        <Typography color="#909497" fontWeight={500} fontFamily="Roboto !important" fontSize="1.5rem">
          INTRO
        </Typography>
        <Typography>
          In my role as an Associate Software Engineer at Incture Technologies, I handle front-end web technologies for a range of projects and clientele. My degree in information science and
          engineering is from Bangalore's B N M Institute of Technology.
        </Typography>
      </Stack>

      <Stack textAlign="left" spacing="1rem" margin="0rem 0rem 2rem 3rem">
        <Typography fontWeight={500} fontFamily="Roboto !important" fontSize="1.6rem" color="#909497">
          SKILLS
        </Typography>
        <Stack direction="row" spacing="2rem" margin="0rem 0rem 3rem 3rem">
          <Tooltip title="HTML5">
            <Avatar src={html5} className={classes.skillIconsStyle} />
          </Tooltip>
          <Tooltip title="CSS">
            <Avatar src={css} className={classes.skillIconsStyle} />
          </Tooltip>
          <Tooltip title="JavaScript">
            <Avatar src={javascript} className={classes.skillIconsStyle} />
          </Tooltip>
          <Tooltip title="ReactJs">
            <Avatar src={react} className={classes.skillIconsStyle} />
          </Tooltip>
          <Tooltip title="ReduxJs">
            <Avatar src={redux} className={classes.skillIconsStyle} />
          </Tooltip>
          <Tooltip title="SAPUI5">
            <Avatar src={sapui5} className={classes.skillIconsStyle} />
          </Tooltip>
        </Stack>
      </Stack>

      <Stack textAlign="left" spacing="1rem" margin="0rem 0rem 2rem 3rem">
        <Typography fontWeight={500} fontFamily="Roboto !important" fontSize="1.6rem" color="#909497">
          CODING PROFILES
        </Typography>
        <Stack direction="row" spacing="2rem" margin="0rem 0rem 3rem 3rem">
          <a href="https://www.geeksforgeeks.org/user/ayushilodha/" target="_blank" rel="noopener noreferrer">
            <Tooltip title="GeeksForGeeks">
              <Avatar src={gfg} className={`${classes.skillIconsStyle} ${classes.zoomOnHover}`}  />
            </Tooltip>
          </a>
          <a href="https://www.hackerrank.com/profile/Ayushi_21" target="_blank" rel="noopener noreferrer">
            <Tooltip title="Hackerrank">
              <Avatar src={hackerrank} className={`${classes.skillIconsStyle} ${classes.zoomOnHover}`} />
            </Tooltip>
          </a>
          <a href="https://leetcode.com/u/ayushilodha/" target="_blank" rel="noopener noreferrer">
            <Tooltip title="LeetCode">
              <Avatar src={leetcode} className={`${classes.skillIconsStyle} ${classes.zoomOnHover}`}  />
            </Tooltip>
          </a>
        </Stack>
      </Stack>

      <Stack textAlign="left" spacing="1rem" margin="0rem 0rem 2rem 3rem">
        <Typography fontWeight={500} fontFamily="Roboto !important" fontSize="1.5rem" color="#909497">
          PROGRAMMING LANGUAGES
        </Typography>
        <Stack direction="row" spacing="2rem" margin="0rem 0rem 3rem 3rem">
          <Tooltip title="C">
            <Avatar src={cLanguage} className={classes.skillIconsStyle} />
          </Tooltip>
          <Tooltip title="C++">
            <Avatar src={cplusplus} className={classes.skillIconsStyle} />
          </Tooltip>
          <Tooltip title="Python">
            <Avatar src={python} className={classes.skillIconsStyle} />
          </Tooltip>
          <Tooltip title="Java">
            <Avatar src={java} className={classes.skillIconsStyle} />
          </Tooltip>
          <Tooltip title="MySQL">
            <Avatar src={mySql} className={classes.skillIconsStyle} />
          </Tooltip>
        </Stack>
      </Stack>

      <Stack textAlign="left" spacing="1rem" margin="0rem 0rem 2rem 3rem">
        <Typography fontWeight={500} fontFamily="Roboto !important" fontSize="1.5rem" color="#909497">
         DEVELOPER TOOLS
        </Typography>
        <Stack direction="row" spacing="2rem" margin="0rem 0rem 3rem 3rem">
          <Tooltip title="Business Application Studio">
            <Avatar src={bas} className={classes.skillIconsStyle} />
          </Tooltip>
          <Tooltip title="VS Code">
            <Avatar src={vscode} className={classes.skillIconsStyle} />
          </Tooltip>
          <Tooltip title="Git">
            <Avatar src={git} className={classes.skillIconsStyle} />
          </Tooltip>
          <Tooltip title="Pycharm">
            <Avatar src={pycharm} className={classes.skillIconsStyle} />
          </Tooltip>
        </Stack>
      </Stack>

      <Stack textAlign="left" spacing="1rem" margin="0rem 0rem 2rem 3rem">
        <Typography color="#909497" fontWeight={500} fontFamily="Roboto !important" fontSize="1.5rem">
          SOFT SKILLS
        </Typography>
        <ul>
          <li>Communication</li>
          <li>Team Work</li>
          <li>Problem Solving</li>
          <li>Time Management</li>
          <li>Adaptability</li>
        </ul>
      </Stack>

      <Stack textAlign="left" spacing="1rem" margin="0rem 0rem 2rem 3rem">
        <Typography color="#909497" fontWeight={500} fontFamily="Roboto !important" fontSize="1.5rem">
          HOBBIES
        </Typography>
        <ul>
          <li>Swimming</li>
          <li>Badminton</li>
          <li>Guitar</li>
          <li>Music</li>
          <li>Travelling</li>
        </ul>
      </Stack>

      <Stack textAlign="left" spacing="1rem" margin="0rem 0rem 2rem 3rem">
        <Typography color="#909497" fontWeight={500} fontFamily="Roboto !important" fontSize="1.5rem">
          MORE ABOUT ME
        </Typography>
        <ul>
          <li>I was born and bought-up in Bhilwara, Rajasthan. It was here that I finished my education.</li>
          <li>In 2018, I went to Kota,Rajasthan to prepare for JEE and other competittive entrance examinations.</li>
          <li>In 2019, I came to Bangalore for my Engineering and i graduated in 2023.</li>
          <li>In February 2023, I joined Incture Technologies in Bangalore as an Student Intern</li>
          <li>In August 2023, I was being converted as Full-time employee at Incture Technologies.</li>
        </ul>
      </Stack>
    </Stack>
  );
}

export default AboutPage;
