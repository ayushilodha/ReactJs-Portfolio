import { React, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AppHeaderStyles from "../Classes/AppHeaderStyles";
import { Stack } from "@mui/system";
import Home from "../Container/Home";
import About from "../Container/About";
import Education from "../Container/Education";
import Experience from "../Container/Experience";
import Projects from "../Container/Projects";
import ActivityLog from "../Container/ActivityLog";

export default function AppHeader() {
  const [value, setValue] = useState("1");
  const classes = AppHeaderStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack className={classes.AppHeaderClass}>
      <TabContext value={value} className={classes.tabsStyle}>
        <TabList onChange={handleChange} indicatorColor="inherit" className={classes.tabsPosition}>
          <Tab className={classes.tabsStyle} label="Home" value="1" />
          <Tab className={classes.tabsStyle} label="About" value="2" />
          <Tab className={classes.tabsStyle} label="Education" value="3" />
          <Tab className={classes.tabsStyle} label="Experience" value="4" />
          <Tab className={classes.tabsStyle} label="Projects" value="5" />
          {/* <Tab className={classes.tabsStyle} label="Activity Log" value="6" /> */}
        </TabList>

        <TabPanel value="1">
          <Home />
        </TabPanel>
        <TabPanel value="2">
          <About />
        </TabPanel>
        <TabPanel value="3">
          <Education />
        </TabPanel>
        <TabPanel value="4">
          <Experience />
        </TabPanel>
        <TabPanel value="5">
          <Projects />
        </TabPanel>
        {/* <TabPanel value="6">
          <ActivityLog />
        </TabPanel> */}
      </TabContext>
    </Stack>
  );
}
