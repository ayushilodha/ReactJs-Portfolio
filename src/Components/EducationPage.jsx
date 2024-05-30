import React from "react";
import EducationPageStyles from "../Classes/EducationPageStyles";
import { Stack } from "@mui/system";
import { Divider, Typography } from "@mui/material";

function EducationPage() {
  const classes = EducationPageStyles();
  return (
    <Stack className={classes.educationPageContainer}>
      <Stack textAlign="left" spacing="2rem" margin="2rem 0rem 2rem 3rem">
        <Typography fontWeight={700} fontSize="1.5rem" color="#515A5A">
          EDUCATIONAL INFO
        </Typography>
      </Stack>
      <Divider />
      <Stack textAlign="left" spacing="2rem" margin="2rem 0rem 2rem 3rem">
        <Stack margin="2rem 0rem 2rem 3rem" justifyContent="space-between" direction="row">
          <Stack>
            <Typography fontSize="1.3rem" color="#515A5A" fontFamily="initial" className={`${classes.zoomOnHover}`}>
              B.N.M. Institute of Technology, Bangalore, Karnataka
            </Typography>
            <Typography fontSize="1.1rem" color="#515A5A" fontFamily="serif">
              Bachelor of Engineering in Information Science
            </Typography>
          </Stack>
          <Stack>
            <Typography fontSize="1.4rem" color="#515A5A" fontFamily="initial">
              Aug. 2019 - Aug. 2023
            </Typography>
            <Typography fontSize="1.2rem" color="#515A5A" fontFamily="serif" textAlign="end" className={`${classes.zoomOnHover} ${classes.colorOnHover}`}>
              CGPA: 8.37
            </Typography>
          </Stack>
        </Stack>
        <Stack margin="2rem 0rem 2rem 3rem" justifyContent="space-between" direction="row">
          <Stack>
            <Typography fontSize="1.3rem" color="#515A5A" fontFamily="initial" className={`${classes.zoomOnHover}`}>
              Sophia Senior Secondary School, Bhilwara, Rajasthan
            </Typography>
            <Typography fontSize="1.1rem" color="#515A5A" fontFamily="serif">
              12th Std.
            </Typography>
          </Stack>
          <Stack>
            <Typography fontSize="1.4rem" color="#515A5A" fontFamily="initial">
              Apr. 2017 - May 2018
            </Typography>
            <Typography fontSize="1.2rem" color="#515A5A" fontFamily="serif" textAlign="end" className={`${classes.zoomOnHover}`}>
              CGPA: 7.4
            </Typography>
          </Stack>
        </Stack>
        <Stack margin="2rem 0rem 2rem 3rem" justifyContent="space-between" direction="row">
          <Stack>
            <Typography fontSize="1.3rem" color="#515A5A" fontFamily="initial" className={`${classes.zoomOnHover}`}>
              Sophia Senior Secondary School, Bhilwara, Rajasthan
            </Typography>
            <Typography fontSize="1.1rem" color="#515A5A" fontFamily="serif">
              10th Std.
            </Typography>
          </Stack>
          <Stack>
            <Typography fontSize="1.4rem" color="#515A5A" fontFamily="initial">
              Apr. 2015 - May 2016
            </Typography>
            <Typography fontSize="1.2rem" color="#515A5A" fontFamily="serif" textAlign="end" className={`${classes.zoomOnHover}`}>
              CGPA: 9.0
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default EducationPage;
