import { Avatar, Button, Dialog, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import React from "react";
import ProjectPageStyles from "../Classes/ProjectPageStyles";
import { CrossIcon } from "../Assets/SVGIcons";

import git from "../Assets/git.png";
import react from "../Assets/react.png";
import redux from "../Assets/redux.png";
import vscode from "../Assets/vscode.png";
import sapui5 from "../Assets/sapui5.png";
import bas from "../Assets/bas.png";
import pycharm from "../Assets/pycharm.png";
import LM1 from "../Assets/ProjectPics/LM1.png";
import LM2 from "../Assets/ProjectPics/LM2.png";
import LM3 from "../Assets/ProjectPics/LM3.png";
import LM4 from "../Assets/ProjectPics/LM4.png";
import LM5 from "../Assets/ProjectPics/LM5.png";
import LM6 from "../Assets/ProjectPics/LM6.png";
import CM1 from "../Assets/ProjectPics/CM1.png";
import CM2 from "../Assets/ProjectPics/CM2.png";
import CM3 from "../Assets/ProjectPics/CM3.png";
import CM4 from "../Assets/ProjectPics/CM4.png";
import RequestorPage from "../Assets/ProjectPics/RequestorPage.png";
import RequestorPage2 from "../Assets/ProjectPics/RequestorPage2.png";
import CnBPage1 from "../Assets/ProjectPics/CnBPage1.png";
import CnBPage2 from "../Assets/ProjectPics/CnBPage2.png";
import AdminPage from "../Assets/ProjectPics/AdminPage.png";
import ProjectCarousel from "./ProjectCarousel";
import jupyterNotebook from "../Assets/jupyterNotebook.png";
import fyp1 from "../Assets/ProjectPics/fyp1.png";
import fyp2 from "../Assets/ProjectPics/fyp2.png";
import fyp3 from "../Assets/ProjectPics/fyp3.png";
import fyp4 from "../Assets/ProjectPics/fyp4.png";
import fyp5 from "../Assets/ProjectPics/fyp5.png";
import fyp6 from "../Assets/ProjectPics/fyp6.png";
import fyp7 from "../Assets/ProjectPics/fyp7.png";
import fyp8 from "../Assets/ProjectPics/fyp8.png";
import fyp9 from "../Assets/ProjectPics/fyp9.png";
import django from "../Assets/django.png";
import fs1 from "../Assets/ProjectPics/fs1.png";
import fs2 from "../Assets/ProjectPics/fs2.png";
import fs3 from "../Assets/ProjectPics/fs3.png";
import fs4 from "../Assets/ProjectPics/fs4.png";
import fs5 from "../Assets/ProjectPics/fs5.png";
import fs6 from "../Assets/ProjectPics/fs6.png";
import fs7 from "../Assets/ProjectPics/fs7.png";
import sapbtp from "../Assets/sapbtp.png";
import portfolio1 from "../Assets/ProjectPics/portfolio1.png";
import portfolio2 from "../Assets/ProjectPics/portfolio2.png";
import portfolio3 from "../Assets/ProjectPics/portfolio3.png";
import portfolio4 from "../Assets/ProjectPics/portfolio4.png";
import ResearchPaper from "../CustomComponents/ResearchPaper";

function ViewDetailsDialog({ isOpen, onClose, project }) {
  const projectDetails = [
    {
      name: "Incture CherryWork - Compensation Advisor",
      date: "Oct. 2023 - Present",
      techStack: [
        { name: "React", image: react },
        { name: "Redux", image: redux },
        { name: "VS Code", image: vscode },
        { name: "Git", image: git },
      ],
      description: [
        "Developed as a part of the Incture CherryWork suite, the Compensation Advisor application serves as a comprehensive tool for managing employee compensation.",
        "Utilizes cutting-edge technologies such as React, Core Redux, VS Code, and Git to ensure robustness and scalability.",
        "The application utilizes various React libraries to enhance its functionality and user experience.",
        "These include Material UI for designing intuitive user interfaces, React-Redux for managing application state, React-Virtuoso for efficiently rendering large lists, Apexcharts for visualizing data with interactive charts, React-Toastify for displaying notifications, and React-Idle-Timer for handling idle user sessions.",
        "The Compensation Advisor application is deployed on the SAP Business Technology Platform (SAP-BTP), a robust cloud-based platform that provides a comprehensive set of tools and services for developing, integrating, and operating enterprise applications.",
        "Components of the product are built using Material UI and Apexcharts for graphical representation of data.",
        "The product offers two level of approval namely, Line Manager and Compensation Manager to decide on the annaul compensation of an employee.",
        "This product enables designated managers to review and approve the annual compensation of employees, ensuring transparency and accountability in the decision-making process.",
      ],
      images: [
        {
          label: "Snapshots of Line Manager Screen",
          imgPath: LM1,
        },
        {
          label: "Snapshots of Line Manager Screen",
          imgPath: LM2,
        },
        {
          label: "Snapshots of Line Manager Screen",
          imgPath: LM3,
        },
        {
          label: "Snapshots of Line Manager Screen",
          imgPath: LM4,
        },
        {
          label: "Snapshots of Line Manager Screen",
          imgPath: LM5,
        },
        {
          label: "Snapshots of Line Manager Screen",
          imgPath: LM6,
        },
        {
          label: "Snapshots of Comp Manager Screen",
          imgPath: CM1,
        },
        {
          label: "Snapshots of Comp Manager Screen",
          imgPath: CM2,
        },
        {
          label: "Snapshots of Comp Manager Screen",
          imgPath: CM3,
        },
        {
          label: "Snapshots of Comp Manager Screen",
          imgPath: CM4,
        },
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
      description: [
        "Compensation Genie is a dynamic and robust application developed to streamline and optimize the employee compensation management process for enterprises.",
        "The project leveraged Business Application Studio (BAS) for its development environment, providing a comprehensive suite of tools for efficient coding, debugging, and deployment.",
        "BAS facilitated a smooth integration with SAP systems, ensuring that Compensation Genie could seamlessly operate within the existing SAP ecosystem.",
        "Version control and collaborative development were managed using Git, ensuring code integrity, facilitating teamwork, and enabling the tracking of changes throughout the development cycle.",
        "Streamlines the process of calculating employee bonuses, raises, and other compensation elements.",
        "Employs industry best practices for security and data privacy, ensuring the confidentiality and integrity of sensitive employee information.",
        "There were three personas namely, Requestor Person, Compensation & Benefits Persona and Admin Persona",
        "Requestor Persona:  Requests for compensation-related changes, like bonuses, promotions, or salary adjustments, are usually made by staff members or managers.submitting compensation change requests, supplying the required documentation and justifications, and keeping track of the requests' progress.forms for submitting intuitive requests,instantaneous requests status updates,alerts and notifications about updates to approval or action items.",
        "Compensation & Benefits Persona: HR specialists are in charge of examining and approving requests for compensation and making sure they adhere to organizational standards and policies.reviewing requests that have been submitted, analyzing compensation, and approving or rejecting requests in accordance with predetermined standards and financial limitations.",
        "Admin Persona: Users' access, configurations, and overall system integrity are managed by system administrators or HR IT specialists.maintaining user roles and permissions, configuring system settings, and making sure the application is current and operating properly.",
        "Users' access, configurations, and overall system integrity are managed by system administrators or HR IT specialists.maintaining user roles and permissions, configuring system settings, and making sure the application is current and operating properly.",
      ],
      images: [
        {
          label: "Requestor Persona Screens",
          imgPath: RequestorPage,
        },
        {
          label: "Requestor Persona Screens",
          imgPath: RequestorPage2,
        },
        {
          label: "C&B Persona Screens",
          imgPath: CnBPage1,
        },
        {
          label: "C&B Persona Screens",
          imgPath: CnBPage2,
        },
        {
          label: "Admin Persona Screen",
          imgPath: AdminPage,
        },
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
      ],
      description: [
        <ul class="description-list">
          <li>Final year engineering group project developed using Stacked Generalization Machine Learning Approach</li>
          <li>OBJECTIVES:</li>
          <ul>
            <li>Extraction of crime patterns by analysis of available crime and criminal data.</li>
            <li>Predict the crime rate and analyze the crime rate to be happened in future. Based on this information the officials can take charge and try to reduce the crime rate.</li>
            <li>Identify precise crime prone zones through crime analysis.</li>
            <li>Displaying the pictorial representation of crime hotspots.</li>
            <li>Facilitate and suggest surveillance plan and scheduling with respect to crime prone zones identified.</li>
            <li>
              The aim of this project is to perform analysis and prediction of crimes in states using machine learning models. It focuses on creating a model that can help to detect the number of
              crimes by its type in a particular state.
            </li>
          </ul>
          <li>FINDINGS:</li>
          <li>
            Based on the analysis and prediction of crime hotspots using the stacked generalization approach with decision tree, random forest, and gradient boosting machine learning algorithms, we
            can conclude that:
          </li>
          <ul>
            <li>The stacked generalization approach combining the predictions of multiple models can improve the accuracy of crime hotspot prediction compared to using a single model.</li>
            <li>Among the three machine learning algorithms used in this project, the decision tree algorithm performed the best in terms of accuracy, precision, and recall.</li>
            <li>The features that were found to be most important in predicting crime hotspots include location, latitude & longitude, weather, and previous crime incidents.</li>
            <li>The results of this project can be useful in developing crime prevention strategies and allocating law enforcement resources more effectively.</li>
            <li>The project achieves 83% accuracy in predicting crime hotspots.</li>
          </ul>
        </ul>,
      ],
      images: [
        {
          label: "Home Page",
          imgPath: fyp1,
        },
        {
          label: "About Page",
          imgPath: fyp2,
        },
        {
          label: "Registration Page",
          imgPath: fyp3,
        },
        {
          label: "Login Page",
          imgPath: fyp4,
        },
        {
          label: "View Data Page",
          imgPath: fyp5,
        },
        {
          label: "Prediction Page",
          imgPath: fyp6,
        },
        {
          label: "Module Train Page",
          imgPath: fyp7,
        },
        {
          label: "Output with Map Visualization",
          imgPath: fyp8,
        },
        {
          label: "Dataset",
          imgPath: fyp9,
        },
      ],
      showFYPRepoButton: true,
    },
    {
      name: "File Structures Project - StoryBook Management System",
      date: "March 2022 - Aug 2022",
      techStack: [
        { name: "VS Code", image: vscode },
        { name: "PyCharm", image: pycharm },
        { name: "Git", image: git },
        { name: "Django", image: django },
      ],
      description: [
        "A database management system (DBMS) utilizing a file structure technique called Hashing with Progressive Overflow is designed to efficiently manage and organize data.",
        "This method uses hashing to distribute data across storage locations and employs a progressive overflow strategy to address collisions and handle overflow records effectively.",
        "The home page of the website which shows Home, Display and Admin login options.",
        "The project successfully executes essential operations such as search, add, view, delete, and update. When the admin enters details for addition, the information is appended to the data file.",
        "The admin can view whole file details by clicking view button. The whole file is display in form of a table with field headers. The admin can delete the details by clicking on the delete.",
        "Advantages of the Hashing with Progressive Overflow technique include quick access to records for selection and the ease of inserting, deleting, or updating records.",
      ],
      images: [
        {
          label: "Home Page",
          imgPath: fs1,
        },
        {
          label: "StoryBook Record Search Result",
          imgPath: fs2,
        },
        {
          label: "Add Operation",
          imgPath: fs3,
        },
        {
          label: "Delete Operation",
          imgPath: fs4,
        },
        {
          label: "Modify Operation",
          imgPath: fs5,
        },
        {
          label: "Modify Result",
          imgPath: fs6,
        },
        {
          label: "Display All Records",
          imgPath: fs7,
        },
      ],
      showFsRepoButton: true,
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
      description: [
        "A collection of SAPUI5 related tasks done during my internship at Incture Technologies, Bangalore",
        "I contributed to developing SAPUI5 applications, leveraging SAP's UI development toolkit for HTML5 (SAPUi5) to craft web applications with responsive user interfaces tailored for SAP systems.",
        "My tasks included frontend development using SAPUI5 technologies such as HTML5, CSS3, and JavaScript. Which involved writing code to implement UI components, handle user interactions, and manage data binding.",
        "I collaborated on integrating backend SAP systems to retrieve and modify data. This included integrating SAPUI5 applications with SAP systems using technologies such as OData services or SAP Gateway.",
        "As a component of the development process, I conducted thorough testing and debugging of SAPUi5 applications to guarantee their seamless operation. This encompassed tasks such as bug identification and rectification, performance optimization, and verification of compatibility across diverse devices and browsers.",
        "In a collaborative team setting, I worked alongside fellow developers, designers, and stakeholders to orchestrate tasks, exchange updates on progress, and tackle any obstacles or complexities encountered throughout the SAPUi5 development process.",
      ],
      images: [
        {
          label: "Home Page",
          imgPath: portfolio1,
        },
        {
          label: "Technical Skills Set & Certification Details Section",
          imgPath: portfolio2,
        },
        {
          label: "Skill Assessment Details Section",
          imgPath: portfolio3,
        },
        {
          label: "Project Details Section",
          imgPath: portfolio4,
        },
      ],
      showInternshipRepoButton: true,
    },
    // Add more projects as needed
  ];
  const classes = ProjectPageStyles();

  const renderProjectDetails = (project) => {
    const selectedProject = projectDetails.find((item) => item.name === project.name);
    return (
      <>
        <Typography>Date: {project.date}</Typography>
        <Stack direction="row" spacing="0.5rem" marginTop="1rem">
          <Typography>Tech Stack:</Typography>
          {project.techStack.map((tech, index) => (
            <Avatar
              key={index}
              src={tech.image}
              alt={tech.name}
              className={classes.techStackStyle}
              sx={{
                "&:hover": {
                  transform: "scale(1.5)", // Increase size on hover
                },
              }}
            />
          ))}
        </Stack>
        <Stack alignItems="center">
          <ProjectCarousel images={selectedProject.images} />
        </Stack>

        <Typography fontFamily="initial" fontWeight={500} fontSize="1.4rem">
          Project Description:
        </Typography>
        <ul>
          {selectedProject.description.map((point, index) => (
            <li key={index} style={{ paddingTop: "0.5rem" }}>
              {point}
            </li>
          ))}
        </ul>

        {selectedProject.showFsRepoButton && (
          <Button
            variant="contained"
            color="inherit"
            onClick={() => {
              window.open("https://github.com/ayushilodha/storybook-management-system", "_blank");
            }}
            style={{ marginTop: "1rem" }}
            className={classes.zoomOnHover}
          >
            Visit Project Repository
          </Button>
        )}

        {selectedProject.showFYPRepoButton && (
          <Stack direction="row" spacing="1rem">
            <Button
              variant="contained"
              color="inherit"
              onClick={() => {
                window.open("https://github.com/ayushilodha/Analysis-Prediction-of-Crime-Hotspots", "_blank");
              }}
              style={{ marginTop: "1rem" }}
              className={classes.zoomOnHover}
            >
              Visit Project Repository
            </Button>
            <Button
              variant="contained"
              color="inherit"
              onClick={() => {
                window.open("https://ijsrem.com/download/a-survey-on-analysis-and-prediction-of-crime-hotspots-using-stacked-generalization-approach/", "_blank");
              }}
              style={{ marginTop: "1rem" }}
              className={classes.zoomOnHover}
            >
              Visit Research Paper Website
            </Button>
            <ResearchPaper />
          </Stack>
        )}

        {selectedProject.showInternshipRepoButton && (
          <Button
            variant="contained"
            color="inherit"
            onClick={() => {
              window.open("https://github.com/ayushilodha/SAPUI5-Portfolio", "_blank");
            }}
            style={{ marginTop: "1rem" }}
            className={classes.zoomOnHover}
          >
            Visit Project Repository
          </Button>
        )}
      </>
    );
  };

  return (
    <Dialog maxWidth="md" open={isOpen} onClose={onClose} className={classes.dialogContainer}>
      <Stack direction="row" justifyContent="space-between">
        <DialogTitle fontFamily="initial" fontWeight={600} fontSize="1.5rem">
          {project ? project.name : ""}
        </DialogTitle>
        <Button startIcon={<CrossIcon />} onClick={onClose} className={classes.closeButton} />
      </Stack>
      <DialogContent>{project ? renderProjectDetails(project) : null}</DialogContent>
    </Dialog>
  );
}

export default ViewDetailsDialog;
