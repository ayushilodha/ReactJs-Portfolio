import { Avatar, Button, Divider, Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import ProjectPageStyles from "../Classes/ProjectPageStyles";
import ViewDetailsDialog from "../CustomComponents/ViewDetailsDialog";
import react from "../Assets/react.png";
import sapui5 from "../Assets/sapui5.png";
import bas from "../Assets/bas.png";
import vscode from "../Assets/vscode.png";
import pycharm from "../Assets/pycharm.png";
import git from "../Assets/git.png";
import redux from "../Assets/redux.png";
import jupyterNotebook from "../Assets/jupyterNotebook.png";
import django from "../Assets/django.png";
import python from "../Assets/python.png";
import sapbtp from "../Assets/sapbtp.png";

function ProjectsPage() {
  const classes = ProjectPageStyles();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewDetailsClick = (project) => {
    setIsDialogOpen(true);
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const projects = [
    {
      name: "Incture CherryWork - Compensation Advisor",
      date: "Oct. 2023 - Present",
      techStack: [
        { name: "React", image: react },
        { name: "Redux", image: redux },
        { name: "VS Code", image: vscode },
        { name: "Git", image: git },
      ],
    },
    {
      name: "Incture - Compensation Genie",
      date: "Apr. 2023 - Oct 2023",
      techStack: [
        { name: "SAPUI5", image: sapui5 },
        { name: "BAS", image: bas },
        { name: "Git", image: git },
      ],
    },
    {
      name: "Final Year Project - Analysis and Prediction Of Crime Hotspots",
      date: "Oct 2022 - May 2023",
      techStack: [
        { name: "VS Code", image: vscode },
        { name: "PyCharm", image: pycharm },
        { name: "Git", image: git },
        { name: "Jupyter Notebook", image: jupyterNotebook },
        { name: "Python", image: python },
      ],
    },
    {
      name: "File Structures Project - StoryBook Management System",
      date: "March 2022 - Aug 2022",
      techStack: [
        { name: "VS Code", image: vscode },
        { name: "Django", image: django },
        { name: "Python", image: python },
        { name: "Git", image: git },
        
      ],
    },
    {
      name: "Incture Internship Project - SAPUI5 Portfolio",
      date: "March 2022 - Aug 2022",
      techStack: [
        { name: "SAPUI5", image: sapui5 },
        { name: "BAS", image: bas },
        { name: "SAP BTP", image: sapbtp },
        { name: "Git", image: git },
        
      ],
    },
    // Add more projects as needed
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Stack className={classes.projectsPageContainer} spacing="0.5rem">
        <Typography fontWeight={600} fontSize="1.7rem" color="#515A5A" margin="0rem 0rem 0.5rem 0rem">
          PROJECTS
        </Typography>
        <Divider />
        <Stack direction="row" className={classes.projectCardsContainer}>
          {projects.map((project, index) => (
            <Stack
              key={index}
              className={classes.projectCardStyle}
              spacing="1rem"
              sx={{
                "&:hover": {
                  transform: "scale(0.9)", // Increase size on hover
                },
              }}
            >
              <Typography fontSize="1rem" fontWeight={550}>
                {project.name}
              </Typography>
              <Stack direction="row" spacing="0.5rem" justifyContent="center">
                {project.techStack.map((tech, index) => (
                  <Tooltip title={tech.name} key={index}>
                    <Avatar
                      src={tech.image}
                      alt={tech.name}
                      className={classes.techStackStyle}
                      sx={{
                        "&:hover": {
                          transform: "scale(1.5)", // Increase size on hover
                        },
                      }}
                    />
                  </Tooltip>
                ))}
              </Stack>
              <Stack alignItems="center">
                <Button onClick={() => handleViewDetailsClick(project)} variant="contained" className={classes.viewDetailsButtonStyle}>
                  View Details
                </Button>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <ViewDetailsDialog isOpen={isDialogOpen} onClose={handleCloseDialog} project={selectedProject} />
      </Stack>
    </>
  );
}

export default ProjectsPage;
